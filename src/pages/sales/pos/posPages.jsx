import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PosPagination from "./posPagination/posPagination";
import { BASEURL } from "../../../BaseURL/BaseURL";
import Loading from "../../../components/Loading/Loading";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./pos.css";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

const PosPages = () => {
  
  const { pagenumber } = useParams();

  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(Number(pagenumber));
  const [itemsPerPage] = useState(12);
  const [pageNumberLimit, setpageNumberLimit] = useState(4);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [activeItem, setActiveItem] = useState("Item 4");

  const handleClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASEURL}/api/v1/product/`);
        const filtered = response.data.getAllProducts.filter(
          (user) => user.category === "Pos"
        );
        setData(filtered.reverse());
        setRecords(filtered);
        setIsLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(true);
      }
    };
    fetchData();
  }, []);


  useEffect(() =>{
    setCurrentPage(Number(pagenumber))
  },[currentPage]);

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

  if(parseInt(pagenumber) > maxPageNumberLimit){
    setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
    setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
  }

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  //============== add to cart
  const { addItem } = useCart();

  //============== Pop up message
  const [displayPopUp, setDisplayPopUp] = useState(true);

  const closePopUp = () => {
    localStorage.setItem("PosPopUp", true);
    setDisplayPopUp(false);
  };

  useEffect(() => {
    let returningUser = localStorage.getItem("PosPopUp");
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
      <div
        class="container-fluid bg-secondary py-5 lazyload"
        style={{
          height: "500px",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1709225356/productHeaderPage/pos__immgjl.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div class="py-5 mt-5 ">
          <h2 class=" mt-5 text-white text-center">Point Of Sale</h2>
          <h5 class=" mt-4 text-white text-center">
            A set of devices, software and payment services merchants use to
            make sales in person.
          </h5>
          <p class="lead text-white text-center">
            Calculates a customer's purchase amount, adds sales tax, processes
            the payment and logs the time and date of the transaction.
          </p>
        </div>
      </div>

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
                                  ₦{" "}
                                  {parseInt(
                                    product.price.split(",").join("")
                                  ).toLocaleString()}
                                  .00
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

                  <div className="mt-5">
                    <PosPagination
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
          <div class="col-md-3  mb-5">
            <div class="position-sticky p-3" style={{ top: "2rem" }}>
              <div class="mb-3 mt-4 rounded">
                <form class="d-flex  pt-5">
                  {/* <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-success me-5" type="submit">Search</button> */}
                </form>
                <h4 class="fw-bold">Browse Categories</h4>
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
                      All
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
                      className={`item ${
                        activeItem === "Item 4" ? "active" : ""
                      }`}
                      onClick={() => handleClick("Item 4")}
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PosPages;
