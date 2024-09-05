import React, { useState } from "react";
import Slider from "react-slider";
import { BASEURL } from "../../../BaseURL/BaseURL";

const ComputerFilter = ({ setFilteredProducts }) => {
  const [filters, setFilters] = useState({
    ram: [],
    brand: [],
    drive: [],
    price: [0, 100000] // Default price range
  });

  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;
    setFilters((prevFilters) => {
      const updatedFilters = {
        ...prevFilters,
        [name]: checked
          ? [...prevFilters[name], value]
          : prevFilters[name].filter((item) => item !== value)
      };
      applyFilters(updatedFilters);
      return updatedFilters;
    });
  };

  const handlePriceChange = (value) => {
    setFilters((prevFilters) => {
      const updatedFilters = {
        ...prevFilters,
        price: value
      };
      applyFilters(updatedFilters);
      return updatedFilters;
    });
  };

  const applyFilters = (updatedFilters) => {
    let queryParams = [];

    if (updatedFilters.ram.length > 0) {
      queryParams.push(
        `ram=${updatedFilters.ram
          .map((ram) => ram.replace(/\D/g, ""))
          .join(",")}`
      );
    }

    if (updatedFilters.brand.length > 0) {
      queryParams.push(
        `brand=${updatedFilters.brand
          .map((brand) => brand.replace(/\s+/g, "").toLowerCase())
          .join(",")}`
      );
    }

    if (updatedFilters.drive.length > 0) {
      queryParams.push(
        `drive=${updatedFilters.drive
          .map((drive) => drive.replace(/\D/g, ""))
          .join(",")}`
      );
    }

    if (updatedFilters.price[0] !== 0 || updatedFilters.price[1] !== 100000) {
      queryParams.push(`price=${updatedFilters.price.join("-")}`);
    }

    const queryString = queryParams.length > 0 ? queryParams.join("&") : "";

    // Fetch filtered products
    fetch(
      `${BASEURL}api/v1/product/filter?category=Computer&${queryString}`
    )
      .then((response) => response.json())
      .then((data) => setFilteredProducts(data.data))
      .catch((error) => console.error("Error:", error));
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
            className="form-check-input"
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
            className="form-check-input"
          />
          <label className="form-check-label">HP</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="brand"
            value="Apple"
            onChange={handleCheckboxChange}
            className="form-check-input"
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
            className="form-check-input"
          />
          <label className="form-check-label">2TB</label>
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-3">
        <label className="form-label">Price Range (₦):</label>
        <Slider
          min={0}
          max={100000}
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
          <span style={{ marginTop: "15px" }}>₦{filters.price[0]}</span>
          <span style={{ marginTop: "15px" }}>₦{filters.price[1]}</span>
        </div>
      </div>
    </form>
  );
};

export default ComputerFilter;
