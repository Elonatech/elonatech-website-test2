import React, { useState, useEffect } from "react";
import Slider from "react-slider";
import "./shopFilter.css"
import axios from "axios";
import { BASEURL } from "../../../BaseURL/BaseURL";



const ShopFilter = ({ setFilteredProducts }) => {
  const [filters, setFilters] = useState({
    brand: [], // Holds selected brands
    price: [0, 1000000] // Default price range
  });
  const [priceRange, setPriceRange] = useState([0, 1000000]); // Dynamic price range state
  const [noResultsMessage, setNoResultsMessage] = useState(""); // State to handle no results message

  const [brands, setBrands] = useState([])

 
  useEffect(() => {
    // Fetch unique brands on component mount
    axios
      .get(`${BASEURL}/api/v1/product/brand`)
      .then((response) => {
        if (response.data.success) {
          // Normalize brands: trim spaces and convert to lowercase
          const normalizedBrands = response.data.brands.map((brand) => {
            return brand.trim().toLowerCase();
          });

          // Use a Set to remove duplicates and map back to display the original casing
          const uniqueBrands = [...new Set(normalizedBrands)];
          
          // Map normalized brands to their first appearance with original casing
          const displayBrands = uniqueBrands.map((uniqueBrand) => {
            // Find the first matching original brand in the original list for display
            return response.data.brands.find(
              (brand) => brand.trim().toLowerCase() === uniqueBrand
            );
          });

          setBrands(displayBrands);
        }
      })
      .catch((error) => {
        console.error("Error fetching brands:", error);
      });
  }, []);

  // Handle brand selection and immediately apply the filter
  const handleBrandChange = async (brand) => {
    const updatedBrands = filters.brand.includes(brand)
      ? filters.brand.filter((b) => b !== brand)
      : [...filters.brand, brand];

    // Update the state with the new list of selected brands
    setFilters((prevFilters) => ({ ...prevFilters, brand: updatedBrands }));

    // Fetch and filter products based on updated filters
    try {
      const response = await axios.get(`${BASEURL}/api/v1/product`, {
        params: {
          brand: updatedBrands.join(","),
          minPrice: filters.price[0],
          maxPrice: filters.price[1]
        }
      });

      if (response.data.success) {
        setFilteredProducts(response.data.data); // Update the filtered products
      }
    } catch (error) {
      console.error("Error filtering products:", error);
    }
  };

  useEffect(() => {
    fetch(`${BASEURL}/api/v1/product/filter/all`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Received Min Price:", data.minPrice);
        console.log("Received Max Price:", data.maxPrice);
        if (data.minPrice !== undefined && data.maxPrice !== undefined) {
          setPriceRange([data.minPrice, data.maxPrice]);
          setFilters((prevFilters) => ({
            ...prevFilters,
            price: [data.minPrice, data.maxPrice]
          }));
        }
        setFilteredProducts(data.data);
      })
      .catch((error) => console.error("Error fetching initial data:", error));

    const handlePriceInputChange = (event) => {
      const { name, value } = event.target;
      const newPrice = parseFloat(value) || 0;
      setFilters((prevFilters) => {
        const updatedPrice = [...prevFilters.price];
        if (name === "minPrice") {
          updatedPrice[0] = newPrice;
        } else if (name === "maxPrice") {
          updatedPrice[1] = newPrice;
        }
        return {
          ...prevFilters,
          price: updatedPrice
        };
      });
    };
  }, [setFilteredProducts]);

  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;
    setFilters((prevFilters) => {
      const updatedFilters = {
        ...prevFilters,
        [name]: checked ? value : "" // Set value or reset if unchecked
      };
      applyFilters(updatedFilters); // Apply filters each time a checkbox is changed
      return updatedFilters;
    });
  };

  const handlePriceChange = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: value
    }));
  };

  const handleApplyClick = () => {
    applyFilters(filters); // Apply filters including price when "Apply" is clicked
  };

  const applyFilters = (updatedFilters) => {
    let queryParams = [];

    // Add brand filter if selected
    if (updatedFilters.brand) {
      queryParams.push(
        `brand=${updatedFilters.brand.replace(/\s+/g, "").toLowerCase()}`
      );
    }

    // Add drive filter if selected

    // Add price filter if the price range is modified
    if (
      updatedFilters.price[0] !== 0 || // Min price is not default
      updatedFilters.price[1] !== 1000000 // Max price is not default
    ) {
      queryParams.push(`minPrice=${updatedFilters.price[0]}`);
      queryParams.push(`maxPrice=${updatedFilters.price[1]}`);
    }

    // Build the query string with all active filters
    const queryString = queryParams.length > 0 ? queryParams.join("&") : "";

    // Fetch the products using the combined filter criteria
    fetch(`${BASEURL}/api/v1/product/filter/all?${queryString}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data.length === 0) {
          // Set no results message if no products found
          setNoResultsMessage(
            data.message || "Sorry, no product found with this criteria."
          );
        } else {
          // Clear the no results message if products are found
          setNoResultsMessage("");
        }
        setFilteredProducts(data.data);
      })
      .catch((error) => console.error("Error:", error));
  };

  // Helper function to format numbers with commas for display
  const formatPrice = (price) => {
    return price.toLocaleString(); // Adds commas to the number
  };
  const handleInputPriceChange = (event, index) => {
    const value = event.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    const newPrice = [...filters.price];
    newPrice[index] = parseFloat(value) || 0;
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: newPrice
    }));
  };
  const formatPrice2 = (price) => {
    return new Intl.NumberFormat().format(price); // Formats price with commas
  };

  return (
    <div className="shop-filter">
      {noResultsMessage && (
        <div className="no-results-message">
          <p>{noResultsMessage}</p>
          <p>
            Go back to the <a href="/shop">Products page</a> to explore more
            amazing products.
          </p>
        </div>
      )}

      <form>
        {/* Brand Filter - Scrollable */}
        <div className="mb-3">
          <div style={{ maxHeight: "120px", overflowY: "scroll" }}>
            <h4>Filter by Brand</h4>
            {brands.map((brand) => (
              <div key={brand}>
                <input
                  type="checkbox"
                  id={brand}
                  name="brand"
                  value={brand}
                  checked={filters.brand.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
                <label htmlFor={brand}>{brand}</label>
              </div>
            ))}
            {/* Apply button to apply filters */}
            {/* <button onClick={applyFilters}>Apply Filters</button> */}
          </div>
        </div>

       

        {/* Price Filter */}
        <div className="price-filter">
          <label className="price-label">
            PRICE (₦){" "}
            <button
              type="button"
              className="apply-button"
              onClick={handleApplyClick}
            >
              APPLY
            </button>
          </label>
          <Slider
            className="custom-slider"
            value={filters.price}
            onChange={handlePriceChange}
            min={priceRange[0]}
            max={priceRange[1]}
            step={5}
            pearling
            renderThumb={(props, state) => (
              <div {...props} className="thumb">
                {/* Optional: Add content inside thumb */}
              </div>
            )}
            renderTrack={(props, state) => (
              <div {...props} className="track">
                {/* Optional: Customize track */}
              </div>
            )}
          />
          <div className="price-inputs">
            <input
              style={{ width: "50%" }}
              type="text"
              value={formatPrice(filters.price[0])}
              onChange={(e) => handleInputPriceChange(e, 0)}
              className="price-input"
            />
            <span className="separator">-</span>
            <input
              style={{ width: "50%" }}
              type="text"
              value={formatPrice(filters.price[1])}
              onChange={(e) => handleInputPriceChange(e, 1)}
              className="price-input"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShopFilter;
