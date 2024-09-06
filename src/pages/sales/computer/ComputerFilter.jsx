import React, { useState } from "react";
import Slider from "react-slider";
import { BASEURL } from "../../../BaseURL/BaseURL";

const ComputerFilter = ({ setFilteredProducts }) => {
  const [filters, setFilters] = useState({
    ram: "",
    brand: "",
    drive: "",
    price: [0, 1000000] // Default price range
  });

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
    setFilters((prevFilters) => {
      const updatedFilters = {
        ...prevFilters,
        price: value
      };
      applyFilters(updatedFilters); // Apply filters when the price changes
      return updatedFilters;
    });
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

    // Add price filter only if price is modified from the default
    if (
      updatedFilters.price[0] !== 0 || // Min price is not default
      updatedFilters.price[1] !== 1000000 // Max price is not default
    ) {
      queryParams.push(`price=${updatedFilters.price.join("-")}`);
    }

    // Build query string if there are any parameters
    const queryString = queryParams.length > 0 ? queryParams.join("&") : "";

    // Fetch filtered products
    fetch(
      `${BASEURL}/api/v1/product/filter?category=Computer&${queryString}`
    )
      .then((response) => response.json())
      .then((data) => setFilteredProducts(data.data))
      .catch((error) => console.error("Error:", error));
  };

  // Helper function to format numbers with commas for display
  const formatPrice = (price) => {
    return price.toLocaleString(); // Adds commas to the number
  };

  return (
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
            disabled={filters.ram && filters.ram !== "4GB"}
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
            disabled={filters.ram && filters.ram !== "8GB"}
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
            disabled={filters.ram && filters.ram !== "16GB"}
          />
          <label className="form-check-label">16GB</label>
        </div>
      </div>

      {/* Brand Filter */}
      <div className="mb-3">
        <label className="form-label">Brand:</label>
        <div className="form-check">
          <input
            type="checkbox"
            name="brand"
            value="DELL"
            onChange={handleCheckboxChange}
            checked={filters.brand === "DELL"}
            className="form-check-input"
            disabled={filters.brand && filters.brand !== "DELL"}
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
            disabled={filters.brand && filters.brand !== "HP"}
          />
          <label className="form-check-label">HP</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="brand"
            value="Apple"
            onChange={handleCheckboxChange}
            checked={filters.brand === "Apple"}
            className="form-check-input"
            disabled={filters.brand && filters.brand !== "Apple"}
          />
          <label className="form-check-label">Apple</label>
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
            disabled={filters.drive && filters.drive !== "512GB"}
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
            disabled={filters.drive && filters.drive !== "1TB"}
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
            disabled={filters.drive && filters.drive !== "2TB"}
          />
          <label className="form-check-label">2TB</label>
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-3">
        <label className="form-label">Price Range (₦):</label>
        <Slider
          min={0}
          max={1000000}
          step={100}
          value={filters.price}
          onChange={handlePriceChange}
          renderTrack={(props, state) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "6px",
                background: state.index === 1 ? "#ddd" : "#007bff"
              }}
            />
          )}
          renderThumb={(props) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "20px",
                width: "20px",
                backgroundColor: "#007bff",
                borderRadius: "50%",
                outline: "none",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)"
              }}
            />
          )}
          className="price-slider"
        />
        <div className="d-flex justify-content-between mt-2">
          <span style={{ marginTop: "15px" }}>
            ₦{formatPrice(filters.price[0])}
          </span>
          <span style={{ marginTop: "15px" }}>
            ₦{formatPrice(filters.price[1])}
          </span>
        </div>
      </div>
    </form>
  );
};

export default ComputerFilter;
