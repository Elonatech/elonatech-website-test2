import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShopPagination from "./shopPagination/shopPagination";
import "./shop.css";
import { BASEURL } from "../../../BaseURL/BaseURL";
import Loading from "../../../components/Loading/Loading";
import axios from "axios";
import {LazyLoadImage, trackWindowScroll } from "react-lazy-load-image-component";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

const Shop = () => {


  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [pageNumberLimit, setpageNumberLimit] = useState(4);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const [filters, setFilters] = useState({
    price: "",
    priceMin: "",
    priceMax: "",
    ram: "",
    brand: "",
    name: "",
    hardDisk: "",
    category: "",
    discount: "",
    rating: ""
  });

  const handleRamChange = (e) => {
    const { value, checked } = e.target;
    let updatedRam = filters.ram.split(",").filter(Boolean); // Split and remove empty strings

    if (checked) {
      // Add RAM value to the list
      updatedRam.push(value);
    } else {
      // Remove RAM value from the list
      updatedRam = updatedRam.filter((ram) => ram !== value);
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      ram: updatedRam.join(","), // Join the array into a string separated by commas
    }));
  }




    const [priceRange, setPriceRange] = useState([0, 100000]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value.toLowerCase() // Convert to lowercase
    }));
  };

   const handlePriceChange = (e) => {
     const { name, value } = e.target;
     setFilters((prevFilters) => ({
       ...prevFilters,
       [name]: value // Update priceMin or priceMax
     }));
   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the query parameters dynamically
    const queryParams = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        queryParams.append(key, value.toLowerCase()); // Convert to lowercase
      }
    });

    if (priceRange) {
      queryParams.append("price", `${priceRange[0]}-${priceRange[1]}`);
    }

    const url = `http://localhost:8000/api/v1/product/filter?${queryParams.toString()}`;

    try {
      const response = await axios.get(url);
      console.log(response.data); // Handle the response data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
 const [activeItem, setActiveItem] = useState("Item 1");

   const handleClick = (item) => {
     setActiveItem(item);
   };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASEURL}/api/v1/product/`);
        setData(response.data.getAllProducts.reverse());
        setRecords(response.data.getAllProducts);
        setIsLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(true);
      }
    };
    fetchData();
  }, []);




  const Filter = (event) => {
    setRecords(
      data
        .reverse()
        .filter((c) => c.name.toLowerCase().includes(event.target.value))
    );
  };


  const paginate = (pages) => setCurrentPage(pages);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = records.slice(indexOfFirstItem, indexOfLastItem);

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
    localStorage.setItem("ToastPop", true);
    setDisplayPopUp(false);
  };

  useEffect(() => {
    let returningUser = localStorage.getItem("ToastPop");
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
      <Helmet>
        <title>Shop - Tech Solutions, Digital</title>
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Shop through a wide selection of laptops, printers, office equipment, pos system, network devices products at Elonatech. Free shipping and free returns on Prime eligible items. Smart business people need quality and reliable hardware, software, service, and support for the day to day running of their businesses "
        />
        <link rel="canonical" href="/shop" />
        <meta
          name="keywords"
          content="printers, network devices, laptops, office equipment, pos system, Elonatech "
        />
      </Helmet>
      {/* ======================================================================== Header ===========================================================================*/}
      <div
        class="container-fluid bg-secondary py-5 "
        style={{
          height: "500px",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1709811140/shopPage/shop_oby1yn.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div class="py-5 mt-5 ">
          <h2 class=" mt-5 text-white text-center">Shop Products</h2>
          <h5 class=" mt-4 text-white text-center">
            Get what you need to run your business
          </h5>
          <p class="lead text-white text-center">
            Smart business people need quality and reliable hardware, software,
            service, and support for the day to day running of their businesses
          </p>
        </div>
      </div>

      <main class="container-fluid">
        <div class="row g-0">
          <div class="col-md-9 ">
            <section class="ftco-section" id="skills-section">
              <div class="container ">
                <div class="row justify-content-center pt-3 pb-4">
                  <div className="col-md-8 pt-4 ">
                    <h6>
                      SHOWING <span className="text-danger">{currentPage}</span>{" "}
                      –{" "}
                      <span className="text-danger">
                        {currentPage * itemsPerPage}
                      </span>{" "}
                      OF <span className="text-danger">{data.length}</span>{" "}
                      RESULTS
                    </h6>
                  </div>
                  <div className="col-md-4 pt-3">
                    <input
                      class="form-control"
                      type="search"
                      onChange={Filter}
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                </div>
                <div class="row g-1 progress-circle ">
                  {isLoading ? (
                    currentPosts?.map((product) => {
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
                                  ₦ {Number(product.price).toLocaleString()}.00
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
                </div>
                {/*============================================== Pagination ================================================*/}
                <div className="mt-5">
                  <ShopPagination
                    totalPosts={records.length}
                    itemsPerPage={itemsPerPage}
                    maxPageNumberLimit={maxPageNumberLimit}
                    minPageNumberLimit={minPageNumberLimit}
                    currentPage={currentPage}
                    id
                    handleNextbtn={handleNextbtn}
                    handlePrevbtn={handlePrevbtn}
                    paginate={paginate}
                  />
                </div>
              </div>
            </section>
          </div>
          <div class="col-md-3 ">
            {/* <
              class="position-sticky "
              style={{ top: "2rem", marginTop: "20px" }}
            > */}
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
                    className={`item ${
                      activeItem === "Item 1" ? "active" : ""
                    }`}
                    onClick={() => handleClick("Item 1")}
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/computers"}
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.textDecoration = "underline")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.textDecoration = "none")
                    }
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
              <h4 className="mb-3">Sort Products By</h4>

              <form
                onSubmit={handleSubmit}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
              >
                {/* Brand */}
                <div className="mb-2">
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
                </div>

                

                {/* Price Range */}
                <div className="mb-2">
                  <label htmlFor="priceRange" className="form-label">
                    Price Range (₦)
                  </label>
                  <div className="d-flex flex-column">
                    <Slider
                      range
                      min={0}
                      max={100000} // Adjust this to your needs
                      defaultValue={priceRange}
                      onChange={(value) => setPriceRange(value)}
                      allowCross={false}
                    />
                    <div className="d-flex justify-content-between mt-2">
                      <span>{`₦${priceRange[0]}`}</span>
                      <span>{`₦${priceRange[1]}`}</span>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-warning mt-2 w-100">
                  Apply
                </button>
              </form>
            </div>

            {/* end */}
          </div>
        </div>
      </main>
    </>
  );
};

export default trackWindowScroll(Shop);