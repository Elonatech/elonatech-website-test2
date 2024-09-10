import "./ComputerFilter.css"; // Assuming you'll add custom styles here
import React, { useState, useEffect } from "react";
import Slider from "react-slider";

const ComputerFilter = ({ setFilteredProducts }) => {
  const [filters, setFilters] = useState({
    ram: "",
    brand: "",
    drive: "",
    price: [0, 1000000] // Default price range
  });

  const [priceRange, setPriceRange] = useState([0, 1000000]); // Dynamic price range state
  const [noResultsMessage, setNoResultsMessage] = useState(""); // State to handle no results message

  useEffect(() => {
    fetch(
      `https://test-api2-aceo.onrender.com/api/v1/product/filter?category=Computer`
    )
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

    // Add RAM filter if selected
    if (updatedFilters.ram) {
      queryParams.push(`ram=${updatedFilters.ram.replace(/\D/g, "")}`);
    }

    // Add brand filter if selected
    if (updatedFilters.brand) {
      queryParams.push(
        `brand=${updatedFilters.brand.replace(/\s+/g, "").toLowerCase()}`
      );
    }

    // Add drive filter if selected
    if (updatedFilters.drive) {
      queryParams.push(`drive=${updatedFilters.drive.replace(/\D/g, "")}`);
    }

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
    fetch(
      `https://test-api2-aceo.onrender.com/api/v1/product/filter?category=Computer&${queryString}`
    )
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
    <div>
      {noResultsMessage && (
        <div className="no-results-message">
          <p>{noResultsMessage}</p>
          <p>
            Go back to the <a href="/computers">Computer page</a> to explore
            more amazing products.
          </p>
        </div>
      )}

      <form>
        {/* RAM Filter */}
        <div className="mb-3">
          <label className="form-label">RAM:</label>
          <div className="form-check">
            <input
              type="checkbox"
              name="ram"
              value="4GB"
              onChange={handleCheckboxChange}
              checked={filters.ram === "4GB"}
              className="form-check-input"
            />
            <label className="form-check-label">4GB</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="ram"
              value="8GB"
              onChange={handleCheckboxChange}
              checked={filters.ram === "8GB"}
              className="form-check-input"
            />
            <label className="form-check-label">8GB</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="ram"
              value="16GB"
              onChange={handleCheckboxChange}
              checked={filters.ram === "16GB"}
              className="form-check-input"
            />
            <label className="form-check-label">16GB</label>
          </div>
        </div>

        {/* Brand Filter - Scrollable */}
        <div className="mb-3">
          <label className="form-label">Brand:</label>
          <div style={{ maxHeight: "120px", overflowY: "scroll" }}>
            <div className="form-check">
              <input
                type="checkbox"
                name="brand"
                value="DELL"
                onChange={handleCheckboxChange}
                checked={filters.brand === "DELL"}
                className="form-check-input"
              />
              <label className="form-check-label">Dell</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="brand"
                value="HP"
                onChange={handleCheckboxChange}
                checked={filters.brand === "HP"}
                className="form-check-input"
              />
              <label className="form-check-label">HP</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="brand"
                value="Acer"
                onChange={handleCheckboxChange}
                checked={filters.brand === "Acer"}
                className="form-check-input"
              />
              <label className="form-check-label">Acer</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="brand"
                value="Apple"
                onChange={handleCheckboxChange}
                checked={filters.brand === "Apple"}
                className="form-check-input"
              />
              <label className="form-check-label">Apple</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="brand"
                value="Samsung"
                onChange={handleCheckboxChange}
                checked={filters.brand === "Samsung"}
                className="form-check-input"
              />
              <label className="form-check-label">Samsung</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="brand"
                value="Lenovo"
                onChange={handleCheckboxChange}
                checked={filters.brand === "Lenovo"}
                className="form-check-input"
              />
              <label className="form-check-label">Lenovo</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="brand"
                value="Huawei"
                onChange={handleCheckboxChange}
                checked={filters.brand === "Huawei"}
                className="form-check-input"
              />
              <label className="form-check-label">Huawei</label>
            </div>
          </div>
        </div>

        {/* Drive Filter */}
        <div className="mb-3">
          <label className="form-label">Drive:</label>
          <div className="form-check">
            <input
              type="checkbox"
              name="drive"
              value="512GB"
              onChange={handleCheckboxChange}
              checked={filters.drive === "512GB"}
              className="form-check-input"
            />
            <label className="form-check-label">512GB</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="drive"
              value="1TB"
              onChange={handleCheckboxChange}
              checked={filters.drive === "1TB"}
              className="form-check-input"
            />
            <label className="form-check-label">1TB</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="drive"
              value="2TB"
              onChange={handleCheckboxChange}
              checked={filters.drive === "2TB"}
              className="form-check-input"
            />
            <label className="form-check-label">2TB</label>
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

export default ComputerFilter;
