import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASEURL } from "../../../BaseURL/BaseURL";
import { useNavigate, Link } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import DOMPurify from "dompurify";
import { useCart } from "react-use-cart";
import sanitizeHtml from "sanitize-html";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./singleProduct.css";

// import required modules
import {
  FreeMode,
  Navigation,
  EffectFade,
  Thumbs,
  Pagination
} from "swiper/modules";

import { Helmet } from "react-helmet-async";

const SingleProduct = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const [data, setData] = useState({});
  const [currentAdmin, setCurrentAdmin] = useState("");
  const [computer, setComputer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();



  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("token"));
    setCurrentAdmin(auth);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASEURL}/api/v1/product/${id}`);
        setData(res.data.getProductById);
        setImage(res.data.getProductById.images);
        setComputer(res.data.getProductById.computerProperty);
        setIsLoading(true);
      } catch (error) {
        setIsLoading(true);
        navigate("/shop");
      }
    };
    fetchData();
  }, []);

  const handleDelete = async () => {
    const res = await axios.delete(`${BASEURL}/api/v1/product/${id}`);
    navigate("/shop");
  };

  const { addItem } = useCart();

  // Sanitize Html for description
  const html = data.description;

  return (
    <>
      {/*================================================================ header ==============================================*/}
      <div
        class="container-fluid bg-dark py-5 "
        style={{
          height: "500px",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1710840109/productHeaderPage/shop_inner_page_qgzv9v.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div class="py-5 mt-5 "></div>
      </div>
      <section class="mt-0" id="product" style={{ backgroundColor: "#f1f1f2" }}>
        {isLoading ? (
          <>
            <div class="container py-5 mb-">
              <div class="row border-0 ">
                <div class="col-lg-8 ">
                  <div className="container">
                    <div className="row g-0  ">
                      <div
                        className="col-2"
                        style={{ backgroundColor: "white" }}
                      >
                        <div className="card border-0">
                          <Swiper
                            direction="vertical"
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={10}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs, Pagination]}
                            className="swiper-container gallery-thumbs pb-5"
                          >
                            <ul className="list-unstyled  text-center">
                              {image.map((item) => (
                                <div key={item.id}>
                                  <li className="pb-3">
                                    <SwiperSlide
                                      className="pb- mt-2"
                                      style={{ paddingBottom: "60px" }}
                                    >
                                      <img
                                        src={item.url}
                                        className="img-fluid hto rounded border border-dark"
                                        style={{
                                          height: "60px",
                                          width: "60px",
                                          objectFit: "cover",
                                          cursor: "pointer"
                                        }}
                                      />
                                    </SwiperSlide>
                                  </li>
                                </div>
                              ))}
                            </ul>
                          </Swiper>
                        </div>
                      </div>
                      <div className="col-md-10">
                        <div className="card border-0">
                          {/* #fff  */}
                          <div className="gall">
                            <Swiper
                              style={{
                                "--swiper-navigation-color": "#080808",
                                "--swiper-pagination-color": "#080808"
                              }}
                              spaceBetween={0}
                              // effect={'fade'}
                              navigation={true}
                              loop={true}
                              pagination={{
                                clickable: true
                              }}
                              thumbs={{
                                swiper:
                                  thumbsSwiper && !thumbsSwiper.destroyed
                                    ? thumbsSwiper
                                    : null
                              }}
                              modules={[
                                FreeMode,
                                Navigation,
                                EffectFade,
                                Thumbs,
                                Pagination
                              ]}
                              className="swiper-container gallery-top border-0"
                            >
                              {image.map((item) => (
                                <div key={item.id}>
                                  <SwiperSlide className="border-0">
                                    <div className="text-center">
                                      <img
                                        alt=""
                                        class="img-fluid"
                                        src={item.url}
                                      ></img>
                                    </div>
                                  </SwiperSlide>
                                </div>
                              ))}
                            </Swiper>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 mb-5">
                  <div class="">
                    <Helmet>
                      <title>{`${data.name} -  Elonatech Tech Solution, Digital Solution`}</title>
                      <meta name="description" content={data.name} />
                      <link
                        rel="canonical"
                        href={`https://elonatech.com.ng/product/${id}/${data.name}`}
                      />
                      <meta name="robots" content="index,follow" />
                    </Helmet>

                    <h4 className="fw-bold">{data.name}</h4>
                    <hr />
                    <div class=" mt-0">
                      <p className="">
                        <span className="text-dark fw-bold pe-2">Brand:</span>
                        {data.brand}
                      </p>
                    </div>
                    <div class="d-flex">
                      <h4 className="mt-">
                        ₦ {Number(data.price).toLocaleString()}.00
                      </h4>
                      <p className="ms-2 mt-1">
                        {" "}
                        <del className="">₦ {data.odd}.00</del>
                      </p>
                    </div>
                    <p className="text-danger">
                      {data.quantity <= "0" ? "Out of Stock" : "In Stock"}
                    </p>
                    <p>shipping from ₦ 25000 to </p>
                    <ul class="list-unstyled d-flex mt-3">
                      <li>
                        <i class="fa fa-star" style={{ color: "#f4be1d" }}></i>
                      </li>
                      <li>
                        <i class="fa fa-star" style={{ color: "#f4be1d" }}></i>
                      </li>
                      <li>
                        <i class="fa fa-star" style={{ color: "#f4be1d" }}></i>
                      </li>
                      <li>
                        <i class="fa fa-star" style={{ color: "#f4be1d" }}></i>
                      </li>
                      <li>
                        <i class="fa fa-star" style={{ color: "#f4be1d" }}></i>
                      </li>
                    </ul>
                    <div className="row justify-content-md-end mt-3">
                      <div className="col-6">
                        <div className="" key={data.id}>
                          <button
                            className="btn btn-dark mt-3"
                            onClick={() => addItem(data)}
                          >
                            <b>Add To Cart</b>
                          </button>
                        </div>
                      </div>
                      <div className="col-6">
                        {currentAdmin ? (
                          <div className="text-end">
                            <div className="d-flex justify-content-md-end mt-3 ">
                              <Link to={`/product/${id}/update`}>
                                <i
                                  class="bi bi-pencil-square text-warning fs-3 me-4"
                                  style={{ cursor: "pointer" }}
                                ></i>
                              </Link>
                              <i
                                class="bi bi-trash3 text-danger fs-3"
                                style={{ cursor: "pointer" }}
                                onClick={handleDelete}
                              ></i>
                            </div>
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                      <h6 className="mt-3 fw-bold">PROMOTIONS</h6>
                      <div className="d-flex mt-2">
                        <i class="bi bi-telephone-fill fs-3"></i>
                        <p className="text-dark mt-2 ms-4">
                          Call{" "}
                          <a
                            className="text-decoration-none text-red "
                            href="tel:234 901 454 452"
                          >
                            +234 901 454 4520
                          </a>{" "}
                          To Order
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {data.category !== "Computer" ? (
                <div className="container mt-5  mb-5">
                  <div className="row ">
                    <div className="col-lg-12">
                      <h4 className="fw-bold mb-3 mt-3">Product Detail</h4>
                      <hr className="text-danger" />
                      <div className="border-0">
                        <div
                          class="description mt-2 mb-5 p-"
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(data.description)
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    className="container mt-5"
                    style={{ backgroundColor: "#f1f1f2" }}
                  >
                    <div className="row ">
                      <div className="col-lg-12">
                        <h4 className="fw-bold mb-3 mt-3">Overview</h4>
                        <hr className="text-danger" />
                        <div
                          className="card border-0"
                          style={{ backgroundColor: "#f1f1f2" }}
                        >
                          <div
                            class="description mt-2 mb-5"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(data.description)
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div>
                    {computer.map((com) => (
                      <div key={com.id}>
                        <h4 className="fw-bold mb-3">Description</h4>
                        <table
                          class="table table-bordered"
                          style={{ width: "100%" }}
                        >
                          <thead>
                            <tr></tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row" style={{ width: "30%" }}>
                                Brand
                              </th>
                              <td style={{ width: "60%" }}>{data.brand} </td>
                            </tr>
                            <tr>
                              <th scope="row">Series</th>
                              <td colspan="2">{com.series}</td>
                            </tr>
                            <tr>
                              <th scope="row">Item model number</th>
                              <td colspan="2">{com.model}</td>
                            </tr>
                            <tr>
                              <th scope="row">Item Weight</th>
                              <td>{com.weight}</td>
                            </tr>
                            <tr>
                              <th scope="row">Product Dimensions</th>
                              <td>{com.dimension}</td>
                            </tr>
                            <tr>
                              <th scope="row">Item Dimensions LxWxH</th>
                              <td>{com.item}</td>
                            </tr>
                            <tr>
                              <th scope="row">Color</th>
                              <td>{com.color}</td>
                            </tr>
                            <tr>
                              <th scope="row">Hardware Platform</th>
                              <td>{com.hardware}</td>
                            </tr>
                            <tr>
                              <th scope="row">Operating System</th>
                              <td>{com.os}</td>
                            </tr>
                            <tr>
                              <th scope="row">Processor Brand</th>
                              <td>{com.processor}</td>
                            </tr>
                            <tr>
                              <th scope="row">Number of Processors</th>
                              <td>{com.number}</td>
                            </tr>
                            <tr>
                              <th scope="row">Computer Memory Type</th>
                              <td>{com.memory}</td>
                            </tr>
                            <tr>
                              <th scope="row">RAM</th>
                              <td>{com.ram}</td>
                            </tr>
                            <tr>
                              <th scope="row">Hard Drive</th>
                              <td>{com.drive}</td>
                            </tr>
                            <tr>
                              <th scope="row">Screen display size</th>
                              <td>{com.display}</td>
                            </tr>
                            <tr>
                              <th scope="row">Screen Resolution</th>
                              <td>{com.resolution}</td>
                            </tr>
                            <tr>
                              <th scope="row">Graphics Coprocessor</th>
                              <td>{com.graphics}</td>
                            </tr>
                            <tr>
                              <th scope="row">Voltage</th>
                              <td>{com.voltage}</td>
                            </tr>
                            <tr>
                              <th scope="row">Batteries</th>
                              <td>{com.battery}</td>
                            </tr>
                            <tr>
                              <th scope="row">Wireless Type</th>
                              <td>{com.wireless}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
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
      </section>
    </>
  );
};

export default SingleProduct;
