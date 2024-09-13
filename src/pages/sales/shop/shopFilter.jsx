import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slider"; // Import react-slider
import { BASEURL } from "../../../BaseURL/BaseURL";

const ShopFilter = ({ setFilteredProducts, filteredProducts }) => {
  const [filters, setFilters] = useState({
    brand: [],
    price: [0, 1000000]
  });

  const [brands, setBrands] = useState([]);
  const [defaultPriceRange, setDefaultPriceRange] = useState([0, 1000000]);
  const [priceRange, setPriceRange] = useState([0, 1000000]);

  useEffect(() => {
    axios
      .get(`${BASEURL}/api/v1/product/brand`)
      .then((response) => {
        if (response.data.success) {
          const { brands: fetchedBrands, minPrice, maxPrice } = response.data;

          const normalizedBrands = fetchedBrands.map((brand) =>
            brand.trim().toLowerCase()
          );
          const uniqueBrands = [...new Set(normalizedBrands)];
          const displayBrands = uniqueBrands.map((uniqueBrand) =>
            fetchedBrands.find(
              (brand) => brand.trim().toLowerCase() === uniqueBrand
            )
          );

          setBrands(displayBrands);
          setDefaultPriceRange([minPrice, maxPrice]);
          setPriceRange([minPrice, maxPrice]);
        }
      })
      .catch((error) => {
        console.error("Error fetching brands:", error);
      });
  }, []);

 const handleInputChange = (e, index) => {
   const rawValue = e.target.value.replace(/,/g, ""); // Remove commas

   // If the input is empty, set the value to an empty string
   if (rawValue === "") {
     const updatedPriceRange = [...priceRange];
     updatedPriceRange[index] = ""; // Or use null if you prefer
     setPriceRange(updatedPriceRange);
     return;
   }

   // Convert to number and handle invalid cases
   const newValue = Number(rawValue);

   // Only update if it's a valid number
   if (!isNaN(newValue)) {
     const updatedPriceRange = [...priceRange];
     updatedPriceRange[index] = newValue;
     setPriceRange(updatedPriceRange);
   }
 };

  const handleBrandChange = async (brand) => {
    const updatedBrands = filters.brand.includes(brand)
      ? filters.brand.filter((b) => b !== brand)
      : [...filters.brand, brand];

    setFilters((prevFilters) => ({ ...prevFilters, brand: updatedBrands }));
    await applyFilters(updatedBrands, filters.price);
  };

  const handlePriceRangeChange = (values) => {
    setPriceRange(values);
  };

  const applyPriceFilter = async () => {
    setFilters((prevFilters) => ({ ...prevFilters, price: priceRange }));
    await applyFilters(filters.brand, priceRange);
  };

  const resetPriceRange = () => {
    setPriceRange(defaultPriceRange); // Reset price range to the initial min/max values
    setFilters((prevFilters) => ({ ...prevFilters, price: defaultPriceRange }));
  };

  const applyFilters = async (brands, price) => {
    try {
      const formattedBrands = brands.map((brand) => brand.trim()).join(",");
      const response = await axios.get(
        `${BASEURL}/api/v1/product/filter/all`,
        {
          params: {
            brand: formattedBrands || undefined,
            minPrice: price[0] || undefined,
            maxPrice: price[1] || undefined
          }
        }
      );

      if (response.data.success) {
        setFilteredProducts(response.data.data);
      }
    } catch (error) {
      console.error("Error filtering products:", error);
    }
  };

 const formatPrice = (value) => {
   return value === "" || value === 0
     ? "0"
     : new Intl.NumberFormat().format(value);
 };


  return (
    <div className="">
      {/* Filter by Brand */}
      <div style={{ maxHeight: "200px", overflowY: "scroll" }}>
        {" "}
        {/* Adjusted height */}
        {brands.map((brand) => (
          <div key={brand} className="text-dark">
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
      </div>

      {/* Filter by Price */}
      <div className="price-filter">
        <div className="col col-flex"></div>
        <h4>Filter by Price(₦)</h4>
        <Slider
          className="slider"
          value={priceRange}
          min={defaultPriceRange[0]}
          max={defaultPriceRange[1]}
          step={50}
          onChange={handlePriceRangeChange}
          pearling
          minDistance={10}
        />

        <div className="price-range-values">
          <div style={{ width: "100%" }}>
            <input
              style={{ width: "80%", borderRadius: "5px" }}
              type="text"
              value={priceRange[0] === "" ? "" : formatPrice(priceRange[0])} // Handle zero or empty value
              onChange={(e) => handleInputChange(e, 0)}
            />
          </div>
          <div>
            <input
  style={{ width: "100%", borderRadius: "5px" }}
  type="text"
  value={priceRange[1] === "" ? "" : formatPrice(priceRange[1])} // Handle zero or empty value
  onChange={(e) => handleInputChange(e, 1)}
/>
          </div>
        </div>

        <button onClick={applyPriceFilter} className="apply-btn">
          Apply Price Range
        </button>
        <button onClick={resetPriceRange} className="reset-btn">
          Reset Price Range
        </button>
      </div>

      {/* Add custom CSS for better visuals */}
      <style jsx>{`
        .shop-filter {
          margin-bottom: 1rem;
        }
        .price-filter {
          margin-top: 1rem;
        }
        .slider {
          margin: 10px 0;
        }
        .price-range-values {
          display: flex;
          justify-content: space-between;
        }
        .apply-btn,
        .reset-btn {
          margin: 5px;
          padding: 5px 10px;
          cursor: pointer;
          border: none;
          border-radius: 5px;
        }
        .apply-btn {
          background-color: rgb(52, 84, 140);
          color: white;
        }
        .reset-btn {
          background-color: rgb(220, 53, 69);
          color: white;
        }
        .no-products-message {
          color: red;
          font-size: 18px;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default ShopFilter;
