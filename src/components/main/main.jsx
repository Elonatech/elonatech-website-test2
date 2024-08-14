import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { BASEURL } from "../../BaseURL/BaseURL";
import axios from "axios";
import Serve from "../serve/serve";
import Clients from "../clients/clients";

// Images

import ElonatechSupport from "./captions/Elonatech_suupport-min_hrc21l.png";
import ElonatechOneStop from "./captions/One_stop_IT_solution-min_lqmw0y.png";

// others

import MDImage from "./captions/Ceo1.png";
import CiscoRouter from "./captions/cisco_router_lcjvrx.jpg";
import HpImage from "./captions/hp_rlucrk.jpg";
import OfficePrinterImage from "./captions/office-printer.jpg";
import MacImage from "./captions/macbook.png";
import posImage from "./captions/Pos.png";

import "./main.css";

const Main = () => {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [challenge, setChallenge] = useState("");
  const [business, setBusiness] = useState("");
  const [cost, setCost] = useState("");
  const [invest, setInvest] = useState("");
  const [error, setError] = useState("");

  const handleChangeCost = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setCost(value);
  };
  const handleChangeInvest = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setInvest(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newData = {
        name,
        email,
        occupation,
        challenge,
        business,
        cost,
        invest
      };

      const response = await axios.post(
        `${BASEURL}/api/v1/email/consult`,
        newData,
        { headers: { "Content-Type": "application/json" } }
      );
      if (response) {
        toast.success("Consult Sent!!!");
        setTimeout(() => {
          navigate(0);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
      setError(error.response.data);
    }
  };

  return (
    <>
      {/*================================================================ Card ===================================================================*/}
      <div class="py-3">
        <h2 className="text-center fw-bold">Why Elonatech </h2>
        <div
          style={{
            backgroundColor: "#dc3545",
            height: "2px",
            width: "80px",
            margin: "auto"
          }}
        ></div>
        <h4 className="text-center pt-3">
          Top-Notch Technology Service Provider.
        </h4>
        <h5 className="text-center pt-3"></h5>
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col-md-6 ">
              <div
                class="card shadow-sm me-auto "
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.99), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1709804949/homePage/main/Scalable_IT_left-min_c8po5r.png)`
                }}
              >
                <div class="card-body">
                  <h5 class="card-title text-white mt-3">
                    Website and App Solutions
                  </h5>
                  <p class="card-text  text-white pt-2">
                    At Elonatech, we build websites that are not only visually
                    beautiful but also functionally effective. Our team of web
                    strategists, designers, developers, and project managers
                    work together to help clients meet their business objective
                  </p>
                  <div class="d-flex justify-content-between align-items-center pt-3">
                    <Link className="btn btn-danger" to={"/web-design"}>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 me-auto">
              <div
                class="card shadow-sm"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.99)), url(https://res.cloudinary.com/elonatech/image/upload/v1709804949/homePage/main/Scalable_IT_right-min_cjn5fe.png)`
                }}
              >
                <div class="card-body">
                  <h5 class="card-title text-white mt-3">
                    Flexible, Scalable IT Solutions
                  </h5>
                  <p class="card-text text-white pt-2">
                    Having the right company behind your IT system is as
                    important as the network itself. Implementing a
                    well-designed, secured enterprise network and utilizing the
                    right combination of IT solutions will drive your business
                    to the desired level.
                  </p>
                  <div class="d-flex justify-content-between align-items-center pt-3">
                    <Link className="btn btn-danger" to={"/system-integration"}>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================================================================= Support ================================================================*/}
      <div className="container mt-5 rounded">
        <div className="row align-content-center">
          <div className="col-md-7">
            <div className="border-0">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <div className="d-flex">
                    <i class="bi bi-headset" style={{ fontSize: "30px" }}></i>
                    <div className="">
                      <h5 className="ps-5" style={{ color: "#34548C" }}>
                        Onsite Support And Installations{" "}
                      </h5>
                      <h6 className="ps-5 mt-2 mb-3">
                        Expertise. Convenience. Customer Experience.
                        <div className="support-line mt-2"></div>
                      </h6>
                    </div>
                  </div>
                </li>

                {/*  */}
                <li className="mb-3">
                  <div className="d-flex">
                    <i class="bi bi-gear" style={{ fontSize: "30px" }}></i>
                    <div className="">
                      <h5 className="ps-5" style={{ color: "#34548C" }}>
                        Contact Support
                      </h5>
                      <h6 className="ps-5 ">
                        Let us assist you with any product or service questions.
                        <div className="support-line mt-2"></div>
                      </h6>
                    </div>
                  </div>
                </li>
                {/*  */}
                <li className="mb-3">
                  <div className="d-flex">
                    <i class="bi bi-laptop" style={{ fontSize: "30px" }}></i>
                    <div className="">
                      <h5 className="ps-5" style={{ color: "#34548C" }}>
                        Laptops. Network Servers. Workstations
                      </h5>
                      <h6 className="ps-5 ">
                        Get what you need to run your business
                        <div className="support-line mt-2"></div>
                      </h6>
                    </div>
                  </div>
                </li>
                {/*  */}
                <li className="mb-3">
                  <div className="d-flex">
                    <div className="mb-4">
                      <svg
                        width="32px"
                        height="32px"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16 6.459l-13.855-6.417v25.5l13.855 6.417 13.855-6.417v-25.5zM24.208 21.917l-8.172 3.78-8.167-3.78v-12.98l8.167 3.781 8.172-3.781z" />
                      </svg>
                    </div>
                    <div className="">
                      <h5 className="ps-5" style={{ color: "#34548C" }}>
                        Premium Software Retail & Installation
                      </h5>
                      <h6 className="ps-5 ">
                        {" "}
                        Ensures users perform tasks more effectively
                        <div className="support-line mt-2"></div>
                      </h6>
                    </div>
                  </div>
                </li>
                {/*  */}
                <li className="mt-1">
                  <div className="d-flex">
                    <i class="bi bi-printer" style={{ fontSize: "30px" }}></i>
                    <div className="">
                      <h5 className="ps-5" style={{ color: "#34548C" }}>
                        Printer and Print Solutions
                      </h5>
                      <h6 className="ps-5 ">
                        Efficient running of business operations
                        <div className="support-line mt-2"></div>
                      </h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5 align-self-center">
            <div className="border-0">
              <img
                src=""
                data-src={ElonatechSupport}
                className="img-fluid lazyload"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/*==================================================================== Marketing ============================================================*/}
      <div className="container marketing">
        <div class="row  mt-5 ">
          <div class="col-md-7">
            <h3 class="fw-bold">
              {" "}
              The IT Solutions and Corporate Consultant Company
            </h3>
            <p class="fs-6 p-2">
              We, at Elonatech are aware of your need for quality IT Services.
              Beyond reasonable doubt, the management of information technology
              for business is not inherently a do-it-yourself project. Business
              owners who aren’t tech-savvy need to find quality IT solution
              providers. We are experts in IT related matters, poised to shape
              the industry, by helping clients solve complex IT challenges.{" "}
              <br /> <br />
              Our Company’s logistical services are designed for the
              top-of-the-market corporate clientele; we serve as an interface
              keeping you above the turmoil of working in today’s Nigeria with
              minimum hassle. We strive to be the leading provider of innovative
              information technologies that improve the quality of lives. <br />{" "}
              <br /> We delight in satisfying our clients through the provision
              of innovative, quality, timely, relevant, accurate and affordable
              solutions to their needs. “Our concept is to provide One-Stop ‘IT’
              solution
            </p>
          </div>
          <div class="col-md-5">
            <img
              src=""
              data-src={ElonatechOneStop}
              className="img-fluid lazyload"
              alt=""
            />
          </div>
        </div>
      </div>

      {/*==============================================================  Services =============================================================== */}
      <div className="container mt-">
        <Serve />
      </div>
      {/*============================================================ Our clients ================================================================ */}
      <div className="container mt-5 mb-5">
        <h2 className="text-center fw-bold">Some Of Our Clients</h2>
        <div
          style={{
            backgroundColor: "#dc3545",
            height: "2px",
            width: "80px",
            margin: "auto"
          }}
        ></div>
        <div
          id="carouselExampleControls"
          class="carousel slide mt-5"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            {/* ============================================================== carousel 1 ======================================================================= */}
            <div class="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234681/homePage/clientLogo/amp-featured-image_fincna.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234684/homePage/clientLogo/lsg_iph8mx.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234695/homePage/clientLogo/hv_nzxyt1.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234749/homePage/clientLogo/kosofe_yuqg5x.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234691/homePage/clientLogo/tru_h9afyy.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234742/homePage/clientLogo/feii_a8rzqg.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=================================================================== carousel 2  =================================================================== */}
            <div class="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234686/homePage/clientLogo/ireti_whpffr.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234744/homePage/clientLogo/remaben_yljc8l.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234696/homePage/clientLogo/domino_i6flnw.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234746/homePage/clientLogo/olajide_e245yh.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234750/homePage/clientLogo/pentecostal_cutbi5.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234690/homePage/clientLogo/home_mwhzd9.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=================================================================== carousel 3 ====================================================================*/}
            <div class="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234739/homePage/clientLogo/safebrooks_smeauh.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234750/homePage/clientLogo/pentecostal_cutbi5.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234687/homePage/clientLogo/okhma_hrxdi7.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234698/homePage/clientLogo/neyant_hesh5e.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234754/homePage/clientLogo/universal_vcrdgw.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234683/homePage/clientLogo/women_right_uet6bw.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=================================================================== carousel 4 ====================================================================*/}
            <div class="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234679/homePage/clientLogo/western_buckland_dt19jn.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234678/homePage/clientLogo/veoc_y61crf.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234699/homePage/clientLogo/pineheight_sljytj.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707234752/homePage/clientLogo/district_sjdnft.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707753249/homePage/clientLogo/diva_cakes_betw0b.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-2 col-6">
                    <div className="card border-0">
                      <img
                        src=""
                        data-src="https://res.cloudinary.com/elonatech/image/upload/v1707753250/homePage/clientLogo/cathenet_lgod6k.png"
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* ========================================================= What They Say About Us ======================================================= */}
      <Clients />
      {/*=============================================================  Three cards ================================================================ */}
      <div className="text-center mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div
                class="mt-5 rounded bg-lazy"
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/elonatech/image/upload/v1707488914/homePage/main/User_experience_t6dbvw.png)`
                }}
              >
                <div class="text-center">
                  <p class="p-5 pt-5 pb-5 text-white">
                    We offer bespoke user experience, web design, app design and
                    software development services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                class="mt-5 rounded bg-lazy"
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/elonatech/image/upload/v1707488913/homePage/main/Solution_client_expectation_doxygk.png)`
                }}
              >
                <div class="text-center">
                  <p class="p-5 pt-5 pb-5 text-white">
                    We endeavor to exceed our clients’ expectations with the
                    solutions we provide, at competitive prices.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                class="mt-5 rounded bg-lazy"
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/elonatech/image/upload/v1707488915/homePage/main/budget_and_time_xv2dk6.png)`
                }}
              >
                <div class="text-center text-white">
                  <p class="p-5 pt-5  pb-5">
                    We deliver projects within budget and deadline while
                    continuously maintain quality & standard.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================== Consult ==================================================================*/}
      <nav class="" style={{ backgroundColor: "#cccccc " }}>
        <div class="container ">
          <div class="row">
            <div class=" ">
              <div>
                <div className="row">
                  <div className="col-md-7 ">
                    <div className="mt-5">
                      <h3 class="fs-5 mt-5 fw-bold ">
                        How about a FREE Consultation on the Best Digital
                        Marketing Strategy for your Business?
                      </h3>
                      <p className="fs-6 mt-4">
                        Want to know how to increase your brand visibility,
                        boost audience engagement, drive traffic, increase
                        social media followers, promote your products and
                        service online and increase sales for your business?
                        Elonatech offers tailored advice on how to reach and
                        engage your audience better, increase conversion and
                        maximize profit through a bespoke monthly/yearly digital
                        marketing plan for your business.
                      </p>
                    </div>
                    {/* ========================================================== ConsultForm  ===============================================================*/}
                    <div
                      className="btn btn-danger form-controli btn-md  mt-4 mb-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    >
                      {" "}
                      Get Free Consultation
                    </div>
                    {/* ================================================ body  ============================================== */}
                    <div
                      class="modal fade"
                      id="exampleModal2"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1
                              class="modal-title fs-4 fw-bold text-dark"
                              id="exampleModalLabel"
                            >
                              Free Consulting
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body text-dark">
                            <form>
                              <div class="mb-2 mt-4">
                                <label
                                  for="name"
                                  class="form-label float-start fw-bold"
                                >
                                  Name<span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  onChange={(e) => setName(e.target.value)}
                                  id="name"
                                  aria-describedby="nameHelp"
                                />
                                <label
                                  for="exampleInputEmail1"
                                  class="form-label float-start fw-bold  mt-2"
                                >
                                  Email address
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="email"
                                  class="form-control"
                                  onChange={(e) => setEmail(e.target.value)}
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                />

                                <label
                                  for="what"
                                  class="form-label float-start fw-bold mt-2"
                                >
                                  What do you do?
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control "
                                  onChange={(e) =>
                                    setOccupation(e.target.value)
                                  }
                                  id="what"
                                  aria-describedby="whatHelp"
                                />

                                <label
                                  for="what"
                                  class="form-label float-start fw-bold  mt-2"
                                >
                                  What challenges do you currently face?
                                  <span className="text-danger">*</span>{" "}
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  onChange={(e) => setChallenge(e.target.value)}
                                  id="what"
                                  aria-describedby="whatHelp"
                                />

                                <label
                                  for="what"
                                  class="form-label float-start fw-bold  mt-2"
                                >
                                  what would you change in your business?
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  onChange={(e) => setBusiness(e.target.value)}
                                  id="what"
                                  aria-describedby="whatHelp"
                                />

                                <label
                                  for="what"
                                  class="form-label float-start fw-bold mt-2"
                                >
                                  How much money does it cost you? (In NAIRA)
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  class="form-control"
                                  value={cost}
                                  onChange={handleChangeCost}
                                />

                                <label
                                  for="what"
                                  class="form-label  float-start fw-bold mt-2"
                                >
                                  How much money are you willing to invest? (In
                                  NAIRA)<span className="text-danger">*</span>
                                </label>
                                <input
                                  class="form-control"
                                  value={invest}
                                  onChange={handleChangeInvest}
                                />

                                <div id="emailHelp" class="form-text mt-2">
                                  We'll never share your email with anyone else.
                                </div>
                              </div>
                            </form>
                          </div>
                          <div class="modal-footer border-0">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              onClick={handleSubmit}
                              class="btn btn-danger"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5  align-self-center">
                    <div className="">
                      <img
                        data-src={MDImage}
                        class="lazyload img-fluid mt-2"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* ================================================================= Products ================================================================*/}
      <h2 className="text-center fw-bold mt-5">Latest Products</h2>
      <div
        style={{
          backgroundColor: "#dc3545",
          height: "2px",
          width: "80px",
          margin: "auto"
        }}
      ></div>
      <div class="container-fluid mt-5">
        <div class="row mt-5   justify-content-md-center">
          <div class="col-lg-2 mx-1   border shadow-lg p-3 mb-5 bg-body product-card rounded">
            <Link to={"/shop"} className="text-decoration-none text-dark">
              <div className="text-center pb-2">
                <img
                  src="https://res.cloudinary.com/elonatech/image/upload/v1710503902/loaderImage/blurred_Loader_ufozvn.png"
                  data-src={MacImage}
                  class="lazyload img-fluid"
                  alt=""
                />
              </div>
              <h4 class="fw-normal pb-1">MAC PRO</h4>
              <p>Shop</p>
              <div class="stars" style={{ color: "#f6b01e" }}>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <div class="d-flex justify-content-between">
                <p className="mt-2 px-1 text-danger">₦1,400,000.00</p>
                <i class="bi bi-cart p-1" style={{ fontSize: "25px" }}></i>
              </div>
              <div class="d-grid gap-2">
                <button
                  className="view-more"
                  style={{
                    backgroundColor: "black",
                    fontWeight: "600",
                    borderRadius: "60px",
                    color: "white",
                    padding: "9px"
                  }}
                >
                  View More
                </button>
              </div>
            </Link>
          </div>

          <div class="col-lg-2 mx-1 border  shadow-lg p-3 mb-5 bg-body product-card rounded ">
            <Link to={"/computers"} className="text-decoration-none text-dark">
              <div className="text-center">
                <img
                  src={
                    "https://res.cloudinary.com/elonatech/image/upload/v1710503902/loaderImage/blurred_Loader_ufozvn.png"
                  }
                  data-src={HpImage}
                  class="lazyload img-fluid"
                  alt=""
                />
              </div>
              <h4 class="fw-normal pt-">HP Notebook ...</h4>
              <p>Computers</p>
              <div class="stars" style={{ color: "#f6b01e" }}>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <div class="d-flex justify-content-between">
                <p className="mt-2 px-1 text-danger">₦450,000</p>
                <i class="bi bi-cart p-1" style={{ fontSize: "25px" }}></i>
              </div>
              <div class="d-grid gap-2">
                <button
                  className="view-more"
                  style={{
                    backgroundColor: "black",
                    fontWeight: "600",
                    borderRadius: "60px",
                    color: "white",
                    padding: "9px"
                  }}
                >
                  View More
                </button>
              </div>
            </Link>
          </div>
          <div class="col-lg-2  mx-1 border  shadow-lg p-3 mb-5 bg-body product-card rounded">
            <Link to={"/pos-system"} className="text-decoration-none text-dark">
              <div className="text-center">
                <img
                  src={
                    "https://res.cloudinary.com/elonatech/image/upload/v1710503902/loaderImage/blurred_Loader_ufozvn.png"
                  }
                  data-src={posImage}
                  class="lazyload img-fluid"
                />
              </div>
              <h4 class="fw-normal">Sam Tc Touch</h4>
              <p>Pos</p>
              <div class="stars" style={{ color: "#f6b01e" }}>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <div class="d-flex justify-content-between">
                <p className="mt-2 px-1 text-danger">₦200,000</p>
                <i class="bi bi-cart p-1" style={{ fontSize: "25px" }}></i>
              </div>
              <div class="d-grid gap-2">
                <button
                  className="view-more"
                  style={{
                    backgroundColor: "black",
                    fontWeight: "600",
                    borderRadius: "60px",
                    color: "white",
                    padding: "9px"
                  }}
                >
                  View More
                </button>
              </div>
            </Link>
          </div>
          <div class="col-lg-2 mx-1 border  shadow-lg p-3 mb-5 bg-body product-card rounded ">
            <Link to={"/printers"} className="text-decoration-none text-dark">
              <div className="text-center">
                <img
                  src={
                    "https://res.cloudinary.com/elonatech/image/upload/v1710503902/loaderImage/blurred_Loader_ufozvn.png"
                  }
                  data-src={OfficePrinterImage}
                  class="lazyload img-fluid"
                  width="140"
                  height="140"
                />
              </div>
              <h4 class="fw-normal ">CANON PIXMA...</h4>
              <p>Printers</p>
              <div class="stars" style={{ color: "#f6b01e" }}>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <div class="d-flex justify-content-between">
                <p className="mt-2 px-1 text-danger">₦500,000</p>
                <i class="bi bi-cart p-1" style={{ fontSize: "25px" }}></i>
              </div>
              <div class="d-grid gap-2">
                <button
                  className="view-more"
                  style={{
                    backgroundColor: "black",
                    fontWeight: "600",
                    borderRadius: "60px",
                    color: "white",
                    padding: "9px"
                  }}
                >
                  View More
                </button>
              </div>
            </Link>
          </div>

          <div class="col-lg-2 mx-1  border  shadow-lg p-3 mb-5 bg-body product-card rounded">
            <Link
              to={"/network-devices"}
              className="text-decoration-none text-dark"
            >
              <div className="text-center">
                <img
                  src={
                    "https://res.cloudinary.com/elonatech/image/upload/v1710503902/loaderImage/blurred_Loader_ufozvn.png"
                  }
                  data-src={CiscoRouter}
                  class="lazyload img-fluid"
                />
              </div>
              <h4 class="fw-normal pt-3">Cisco Routers</h4>
              <p>Network Devices</p>
              <div class="stars" style={{ color: "#f6b01e" }}>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <div class="d-flex justify-content-between">
                <p className="mt-2 px-1 text-danger">₦900,000</p>
                <i class="bi bi-cart p-1" style={{ fontSize: "25px" }}></i>
              </div>
              <div class="d-grid gap-2 mt-3">
                <button
                  className="view-more"
                  style={{
                    backgroundColor: "black",
                    fontWeight: "600",
                    borderRadius: "60px",
                    color: "white",
                    padding: "9px"
                  }}
                >
                  View More
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/*====================================================================== End  ============================================================= */}
    </>
  );
};

export default Main;
