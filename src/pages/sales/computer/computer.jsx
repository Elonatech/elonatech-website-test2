import "./computer.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ComputerPagination from "./computerPagination/computerPagination";
import { BASEURL } from "../../../BaseURL/BaseURL";
import Loading from "../../../components/Loading/Loading";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import ComputerFilter from "./ComputerFilter";





const Computer = () => {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [pageNumberLimit, setpageNumberLimit] = useState(4);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
 const [activeItem, setActiveItem] = useState("Item 2");
   const [itemCount, setItemCount] = useState(0); 

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    price: "",
    priceMin: "",
    priceMax: "",
    ram: "",
    name: "",
    hardDisk: "",
    category: "",
    discount: "",
    rating: ""
  });


  const handleClick = (item) => {
    setActiveItem(item);
  };

  


useEffect(() => {
  // Fetch all computers initially
  axios
    .get(`${BASEURL}api/v1/product/computers`, {})
    .then((response) => {
      const products = response.data.data;
      setFilteredProducts(products);
      setIsLoading(true)
      setItemCount(products.length); // Set the number of items
      console.log(products);
    })
    .catch((error) => {
      console.error("Error fetching computers:", error);
    });
}, []);


 

  const paginate = (pages) => setCurrentPage(pages);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  // add to cart
  const { addItem } = useCart();

  // Pop up message
  const [displayPopUp, setDisplayPopUp] = useState(true);

  const closePopUp = () => {
    localStorage.setItem("ComputerPopUp", true);
    setDisplayPopUp(false);
  };

  useEffect(() => {
    let returningUser = localStorage.getItem("ComputerPopUp");
    function showPopUp() {
      if (!returningUser) {
        toast.warn(
          "Please Note That Prices Are Subject to Change Without Prior Notice Due to The Fluctuation in Exchange Rate, Kindly Confirm Every Price at Readiness for Purchase",
          {
            position: "top-center",
            autoClose: 20000,
            className: "pop-up-message"
          },
          closePopUp()
        );
      }
    }
    setInterval(showPopUp(), 604800000);
  }, []);



  return (
    <>
      {/* Header */}
      <div
        class="container-fluid bg-secondary py-5 "
        style={{
          height: "500px",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1709806608/productHeaderPage/products_computers_xpqn4e.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div class="py-5 mt-5 ">
          <h2 class=" mt-5 text-white text-center">Computers</h2>
          <h5 class=" mt-4 text-white text-center">
            Have what you need to run your business with maximum efficiency and
            reliability
          </h5>
          <p class="lead text-white text-center">
            Properly used, a computer can help you become more organized, work
            more efficiently, and accomplish more tasks.
          </p>
        </div>
      </div>

      {/* ======================================================================================= */}
      <main class="container-fluid">
        <div class="row g-0 ">
          <div class="col-md-9 ">
            <section class="ftco-section" id="skills-section">
              <div class="container">
                <div class="row justify-content-center pt-3 pb-4">
                  <div className="col-md-8 pt-4 ">
                    <h6>
                      SHOWING <span className="text-danger">{currentPage}</span>{" "}
                      –{" "}
                      <span className="text-danger">
                        {currentPage * itemsPerPage}
                      </span>{" "}
                      OF <span className="text-danger">{itemCount}</span>{" "}
                      RESULTS
                    </h6>
                  </div>
                  <div className="col-md-4 pt-3">
                    <input
                      class="form-control"
                      type="search"
                      onChange={filters}
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                </div>
                <div class="row g-1 progress-circle ">
                  {isLoading ? (
                    filteredProducts?.map((product) => {
                      return (
                        <div class="col-lg-3 mb-4" key={product.id}>
                     
                          <div class=" mx-1  shadow-lg p-3  bg-body rounded showbutton">
                            <Link
                              className="text-decoration-none text-dark"
                              to={`/product/${product._id}/${product.name
                                .split(` `)
                                .join(`-`)
                                .toLowerCase()}`}
                            >
                              <div className="text-center take">
                                <LazyLoadImage
                                  src={product.images[0]?.url}
                                  placeholderSrc="https://res.cloudinary.com/elonatech/image/upload/v1710241889/loaderImage/blurred_o4delz.avif"
                                  className="lazyload"
                                  width="130"
                                  height="130"
                                  alt=""
                                />
                              </div>
                              <h5 class="fw-normal pt-3">
                                {product.name.slice(0, 23)}...
                              </h5>
                              <p className="lead fs-6">{product.category}</p>
                              <div class="stars" style={{ color: "black" }}>
                                <i
                                  class="bi bi-star-fill"
                                  style={{ color: "#f4be1d" }}
                                ></i>
                                <i
                                  class="bi bi-star-fill"
                                  style={{ color: "#f4be1d" }}
                                ></i>
                                <i
                                  class="bi bi-star-fill"
                                  style={{ color: "#f4be1d" }}
                                ></i>
                                <i
                                  class="bi bi-star-fill"
                                  style={{ color: "#f4be1d" }}
                                ></i>
                                <i
                                  class="bi bi-star-fill"
                                  style={{ color: "#f4be1d" }}
                                ></i>
                              </div>
                              <div class="d-flex justify-content-between">
                                <p className="mt-2 px-1 text-danger">
                                  ₦ {product.price}.00
                                </p>
                                <i
                                  class="bi bi-cart p-1"
                                  style={{
                                    fontSize: "20px",
                                    cursor: "pointer"
                                  }}
                                ></i>
                              </div>
                            </Link>
                            <div class="d-grid gap-2" key={product.id}>
                              <div
                                class="btn btn-outline"
                                style={{ backgroundColor: "#a9abae" }}
                                onClick={() => addItem(product)}
                              >
                                <h6 className="text-danger">ADD TO CART</h6>
                              </div>
                            </div>
                          </div> 
                       
                        </div>
                      );
                    })
                  ) : (
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="d-flex justify-content-center">
                            <div className="my-5 py-5">
                              <Loading />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/*============================================== Pagination ================================================*/}
                  <div className="mt-5">
                    <ComputerPagination
                      totalPosts={records.length}
                      itemsPerPage={itemsPerPage}
                      maxPageNumberLimit={maxPageNumberLimit}
                      minPageNumberLimit={minPageNumberLimit}
                      currentPage={currentPage}
                      handleNextbtn={handleNextbtn}
                      handlePrevbtn={handlePrevbtn}
                      paginate={paginate}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="col-md-3 ">
            <div
              class="position-sticky "
              style={{ top: "2rem", marginTop: "20px" }}
            >
              <div
                style={{
                  marginTop: "50px",
                  paddingTop: "30px",
                  paddingBottom: "30px",

                  marginLeft: "15px"
                }}
              >
                <form
                  style={{
                    paddingTop: "20px",
                    paddingBottom: "20px"
                  }}
                  class="d-flex "
                ></form>
                <h4
                  style={{ marginTop: "-8px", marginBottom: "16px" }}
                  class="fw-bold "
                >
                  Browse Categories
                </h4>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to={"/shop"}
                      className="text-dark"
                      style={{ textDecoration: "none" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.textDecoration = "underline")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.textDecoration = "none")
                      }
                    >
                      All Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/computers"}
                      className={`item ${
                        activeItem === "Item 2" ? "active" : ""
                      }`}
                      onClick={() => handleClick("Item 2")}
                    >
                      Computers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/office-equipment"}
                      className="text-dark"
                      style={{ textDecoration: "none" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.textDecoration = "underline")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.textDecoration = "none")
                      }
                    >
                      Office Equipment
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/pos-system"}
                      className="text-dark"
                      style={{ textDecoration: "none" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.textDecoration = "underline")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.textDecoration = "none")
                      }
                    >
                      POS System
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/printers"}
                      className="text-dark"
                      style={{ textDecoration: "none" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.textDecoration = "underline")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.textDecoration = "none")
                      }
                    >
                      Printers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/network-devices"}
                      className="text-dark"
                      style={{ textDecoration: "none" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.textDecoration = "underline")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.textDecoration = "none")
                      }
                    >
                      Network Devices
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <h1>filters</h1> */}

              <div className="filter-section p-2 bg-white rounded shadow-sm">
                <h4 className="mb-3">Filter Products</h4>
                <ComputerFilter setFilteredProducts={setFilteredProducts} />

                {/* <form
                  onSubmit={handleSubmit}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                > */}
                {/* Brand */}
                {/* <div className="mb-2">
                    <label htmlFor="brand" className="form-label">
                      Brand
                    </label>
                    <input
                      type="text"
                      id="brand"
                      name="brand"
                      className="form-control mb-2"
                      placeholder="Search"
                      value={filters.brand}
                      onChange={handleChange}
                    />
                  </div> */}

                {/* ram */}
                <div className="mb-2">
                  {/* <label className="form-label">RAM</label> */}
                  {/* <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="4Gb"
                        onChange={handleRamChange}
                        checked={filters.ram.includes("4")}
                      />
                      <label className="form-check-label">4GB</label>
                    </div> */}

                  <div className="form-check">
                    {/* <input
                        className="form-check-input"
                        type="checkbox"
                        value="8 Gb"
                        onChange={handleRamChange}
                        checked={filters.ram.includes("8")}
                      /> */}
                    {/* <label className="form-check-label">8GB</label> */}
                  </div>
                  {/* <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="16 Gb"
                        onChange={handleRamChange}
                        checked={filters.ram.includes("16")}
                      />
                      <label className="form-check-label">16GB</label>
                    </div> */}
                </div>
                {/* computer */}
                <div className="mb-2">
                  {/* <label className="form-label">Storage</label> */}
                  {/* <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="256"
                        onChange={handleDriveChange}
                        checked={filters.drive === "256"}
                      />
                      <label className="form-check-label">256GB</label>
                    </div> */}
                  {/* <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="512"
                        onChange={handleDriveChange}
                        checked={filters.drive === "512"}
                      />
                      <label className="form-check-label">512GB</label>
                    </div> */}
                  {/* <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="1TB"
                        onChange={handleDriveChange}
                        checked={filters.drive === "1TB"}
                      />
                      <label className="form-check-label">1TB</label>
                    </div> */}
                </div>

                {/* end */}
                {/* Price Range */}
                {/* <div className="mb-2">
                    <label htmlFor="priceRange" className="form-label">
                      Price Range (₦)
                    </label>
                    <div className="d-flex flex-column"> */}
                {/* <Slider
                        range
                        min={0}
                        max={100000} // Adjust this to your needs
                        defaultValue={priceRange}
                        onChange={(value) => setPriceRange(value)}
                        allowCross={false}
                      /> */}
                {/* <div className="d-flex justify-content-between mt-2">
                        <span>{`₦${priceRange[0]}`}</span>
                        <span>{`₦${priceRange[1]}`}</span>
                      </div> */}
                {/* </div>
                  </div> */}

                {/* <button type="submit" className="btn btn-warning mt-2 w-100">
                    Apply
                  </button> */}
                {/* </form> */}
              </div>

              {/* end */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Computer;
