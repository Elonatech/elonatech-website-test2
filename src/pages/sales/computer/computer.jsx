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
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeItem, setActiveItem] = useState("Item 2");

  const handleClick = (item) => {
    setActiveItem(item);
  };

   const formatPrice = (price) => {
     return price.toLocaleString(); // Adds commas to the number
   };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://test-api2-aceo.onrender.com/api/v1/product/computers`
        );
        const products = response.data.data.reverse();
        setData(products);
        setRecords(products); // Initially display all products
        setIsLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(true);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // If filteredProducts has any values, display them; otherwise, display all products
    if (filteredProducts.length > 0) {
      setRecords(filteredProducts);
    } else {
      setRecords(data); // Display all products when no filters are applied
    }
  }, [filteredProducts, data]);

  const Filter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setRecords(
      data.filter((product) => product.name.toLowerCase().includes(searchTerm))
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
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const { addItem } = useCart();

  return (
    <>
      {/* Header */}
      <div
        className="container-fluid bg-secondary py-5"
        style={{
          height: "500px",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1709806608/productHeaderPage/products_computers_xpqn4e.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div className="py-5 mt-5 ">
          <h2 className="mt-5 text-white text-center">Computers</h2>
          <h5 className="mt-4 text-white text-center">
            Have what you need to run your business with maximum efficiency and
            reliability
          </h5>
          <p className="lead text-white text-center">
            Properly used, a computer can help you become more organized, work
            more efficiently, and accomplish more tasks.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container-fluid">
        <div className="row g-0">
          <div className="col-md-9">
            <section className="ftco-section" id="skills-section">
              <div className="container">
                <div className="row justify-content-center pt-3 pb-4">
                  <div className="col-md-8 pt-4">
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
                      className="form-control"
                      type="search"
                      onChange={Filter}
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                </div>
                <div className="row g-1 progress-circle">
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
                                  ₦ {formatPrice(Number(product.price))}.00
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

              <div className="filter-section p-2 bg-white rounded shadow-sm">
                <h4 className="mb-3">Sort computers by</h4>
                <ComputerFilter setFilteredProducts={setFilteredProducts} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Computer;
