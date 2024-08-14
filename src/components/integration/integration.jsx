import "./intrgration.css";
import Getintouch2 from "../GetInTouch/getintouch2";

import infastructureHeader from "./captions/network_infas_and_integration_pjol6x.jpg";
import FirstInfastructureImage from "./captions/infrastructure2_ipv4uc.png";
import SecondInfastructureImage from "./captions/infrastructure-card3_h0k7oq (1).jpg";
import ThirdInfastructureImage from "./captions/infrastructure-card_puvahq.jpg";
import FourthInfastructureImage from "./captions/infrastructure-card3_h0k7oq (2).jpg";
import FifthInfastructureImage from "./captions/infastructure5_qoksca.jpg";
import SixthInfastructureImage from "./captions/si_mjk7hc.jpg";
import BannerInfastructureImage from "./captions/SystemsIntegrationBanner_y2mbv4.jpg";
import { Helmet } from "react-helmet-async";

const Integration = () => {
  return (
    <>
      <Helmet>
        <title>Infrastructure & System Integration - Tech Solution</title>
        <meta
          name="description"
          content="Building intelligence system to better your business' efficiency and profit  Physical Layer Network Layer Storage Layer"
        />
        <link
          rel="canonical"
          href="https://elonatech.com.ng/system-integration"
        />
      </Helmet>

      {/* =============================================================================== header =====================================================================*/}
      <div
        class="container-fluid bg-secondary py-5 "
        style={{
          minHeight: "500px",
          marginBottom: "100px",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${infastructureHeader})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div class="py-5 mt-5 ">
          <h2 class=" mt-5 text-white text-center">
            Infrastructure & System Integration
          </h2>
          <h5 class=" mt-4 text-white text-center">
            Building intelligence system to better your business' efficiency and
            profit
          </h5>
          <p class=" mt-4 lead text-white text-center">
            Integrating existing, and often disparate systems in a way that
            focuses on increasing values
          </p>
        </div>
      </div>
      {/*=================================================== Information technology ====================================================================================*/}
      <div className="container mb-5 mt-5 ">
        <div className="row">
          <div className="col-md-6">
            <div
              className="card mb-3"
              style={{ boxShadow: " 0 0 10px 5px rgba(0,0,0,0.6)" }}
            >
              <div className="text-center">
                <img
                  src="https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif"
                  data-src={FirstInfastructureImage}
                  className="img-fluid lazyload mt-5"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-1">
            <div className="mb-5">
              <div
                className="card p-5"
                style={{ boxShadow: " 0 0 10px 5px rgba(0,0,0,0.6)" }}
              >
                <p className="text-center mt-3">
                  Information technology (IT) Infrastructure is built upon both
                  physical and virtual components. These components support the
                  infrastructure’s operations, storage, processing of data, and
                  data analysis. Infrastructure can be centralized in a data
                  center or spread across multiple data centers. These
                  decentralized data centers can be controlled by the
                  organization (owner) or by a third-party, such as a cloud
                  provider or a colocation facility.
                </p>
              </div>
            </div>
            <div className="col">
              <div
                className="card mt-2 p-5"
                style={{ boxShadow: " 0 0 10px 5px rgba(0,0,0,0.6)" }}
              >
                <p className="text-center mt-3">
                  System Integration is the process of integrating all the
                  physical and virtual components of an organization’s system.
                  It therefore includes the process of linking together
                  different computing systems and software applications
                  physically or functionally, to act as a coordinated whole. The
                  physical components consist of the various machine systems,
                  computer hardware, inventory, etc. The virtual components
                  consist of data stored in databases, software and
                  applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================================================================== Breakdown =================================================================================*/}
      <h2 className="text-center mb-5">Breakdown Of An IT Infrastructure</h2>
      <div className="container-fluid" style={{ backgroundColor: "#34548c" }}>
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col-md-3">
              <div class="card shadow-sm border-0 rounded mb-3">
                <div className="text-center">
                  <img
                    data-src={SecondInfastructureImage}
                    style={{ width: "100%", height: "225px" }}
                    className="img-fluid lazyload"
                    alt=""
                  />
                </div>
                <div class="card-body">
                  <h4 className="text-center">Physical Layer</h4>
                  <div className="text-center pb-0  ">
                    <p className="btn btn-light ">
                      <h5>(Hardware and Cabling)</h5>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div class="col-md-3">
              <div class="card shadow-sm border-0 rounded ">
                <div className="text-center">
                  <img
                    data-src={ThirdInfastructureImage}
                    style={{ width: "100%", height: "225px" }}
                    className="img-fluid lazyload"
                    alt=""
                  />
                </div>
                <div class="card-body">
                  <h4 className="text-center">Network Layer</h4>
                  <div className="text-center pb-0  ">
                    <p className="btn btn-light ">
                      <h5>(Routers and Switches)</h5>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            <div class="col-md-3">
              <div class="card shadow-sm border-0 rounded">
                <div className="text-center">
                  <img
                    data-src={FourthInfastructureImage}
                    style={{ width: "100%", height: "225px" }}
                    className="img-fluid lazyload"
                    alt=""
                  />
                </div>
                <div class="card-body">
                  <h4 className="text-center">Application Layer</h4>
                  <div className="text-center pb-0  ">
                    <p className="btn btn-light ">
                      <h5>(Software)</h5>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div class="col-md-3">
              <div class="card  shadow-sm border-0">
                <div className="text-center">
                  <img
                    data-src={FifthInfastructureImage}
                    style={{ width: "100%", height: "225px" }}
                    className="img-fluid lazyload"
                    alt=""
                  />
                </div>
                <div class="card-body">
                  <h4 className="text-center">Storage Layer</h4>
                  <div className="text-center pb-0  ">
                    <p className="btn btn-light ">
                      <h5>(Servers and Data Storage)</h5>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
      {/*==================================================================== System Integrator ====================================================================*/}
      <div
        className="container-fluid"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BannerInfastructureImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "390px"
        }}
      >
        <div className="container">
          <div class="row justify-content-md-center">
            <div class="col-md-5 mb-5 ">
              <div className="text-center">
                <img
                  src="https://res.cloudinary.com/elonatech/image/upload/v1710165001/loaderImage/qq8AE_a5blke.gif"
                  data-src={SixthInfastructureImage}
                  className="img-fluid lazyload"
                  alt=""
                />
              </div>
            </div>
            <div class="col-md-7">
              <h3 className=" ms-3 mt-5 text-white">
                Why You Need A System Integrator?
              </h3>
              <h5 className="p-4 text-white">
                In this modern world connected by the Internet, the role of
                system integration engineers is important as more and more
                systems are designed to connect, both within the system under
                construction and to systems that are already deployed.
                <br />
                <br />
                System Integrators integrates discrete systems utilizing a
                variety of techniques such as computer networking, enterprise
                application integration, business process management or manual
                programming.
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/*========================================================== Integration Scope ===============================================================================*/}
      <div className="container">
        <h3 className="text-center fw-bold mt-5">
          Our System Integration Scope
        </h3>
        <div className="row mt-5 mb-5">
          <div className="col-md-4">
            <div
              className="card  border-danger"
              style={{ borderStyle: "dotted", borderWidth: "2px" }}
            >
              <ul className="list-unstyled" style={{ color: "#314f81" }}>
                <li
                  className="border-danger"
                  style={{ borderBottom: "dotted" }}
                >
                  <div className="d-flex ms-3 mt-2">
                    <i class="bi bi-record-circle me-3 fs-5"></i>
                    <p className="mt-1">
                      {" "}
                      <p className="mt-">
                        Analysis and design of IT platforms.
                      </p>
                    </p>
                  </div>
                </li>
                {/*  */}
                <li
                  className="border-danger"
                  style={{ borderBottom: "dotted" }}
                >
                  <div className="d-flex ms-3 mt-2">
                    <i class="bi bi-record-circle me-3 fs-5"></i>
                    <p className="mt-1">
                      Implementation and migration of IT solutions.
                    </p>
                  </div>
                </li>
                {/*  */}
                <li
                  className="d-flex border-danger"
                  style={{ borderBottom: "dotted" }}
                >
                  <div className="d-flex ms-3 mt-2">
                    <i class="bi bi-record-circle me-3 fs-5"></i>
                    <p className="mt-1">Supply of equipment and software.</p>
                  </div>
                </li>
                {/*  */}
                <li className="d-flex border-danger">
                  <div className="d-flex ms-3 mt-2">
                    <i class="bi bi-record-circle me-3 fs-5"></i>
                    <p className="mt-1">
                      Consulting services in the field of business process
                      integration.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card  border-danger"
              style={{ borderStyle: "dotted", borderWidth: "2px" }}
            >
              <ul className="list-unstyled" style={{ color: "#314f81" }}>
                <li
                  className="border-danger"
                  style={{ borderBottom: "dotted" }}
                >
                  <div className="d-flex ms-3 mt-2">
                    <i class="bi bi-record-circle me-3 fs-5"></i>
                    <p className="mt-1">
                      {" "}
                      <p className="mt-">High Availability Solutions.</p>
                    </p>
                  </div>
                </li>
                {/*  */}
                <li
                  className="border-danger"
                  style={{ borderBottom: "dotted" }}
                >
                  <div className="d-flex ms-3 mt-2">
                    <i class="bi bi-record-circle me-3 fs-5"></i>
                    <p className="mt-1">Building Data Lake.</p>
                  </div>
                </li>
                {/*  */}
                <li
                  className="d-flex border-danger"
                  style={{ borderBottom: "dotted" }}
                >
                  <div className="d-flex ms-3 mt-2">
                    <i class="bi bi-record-circle me-3 fs-5"></i>
                    <p className="mt-1">Building Business Intelligence.</p>
                  </div>
                </li>
                {/*  */}
                <li className="d-flex border-danger">
                  <div className="d-flex ms-3 mt-2">
                    <i class="bi bi-record-circle me-3 fs-5"></i>
                    <p className="mt-1">
                      Incorporation solution with Artificial Intelligence
                      Engine.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className="col-md-4">
            <div
              className="card  border-danger"
              style={{ borderStyle: "dotted", borderWidth: "2px" }}
            >
              <ul className="list-unstyled" style={{ color: "#314f81" }}>
                <li
                  className="border-danger"
                  style={{ borderBottom: "dotted" }}
                >
                  <div className="d-flex ms-3 mt-3">
                    <i class="bi bi-record-circle me-3 fs-5"></i>
                    <p className="mt-1">Create a data center infrastructure.</p>
                  </div>
                </li>
                <li
                  className="border-danger"
                  style={{ borderBottom: "dotted" }}
                >
                  <div className="d-flex ms-3 mt-3">
                    <i class="bi bi-record-circle me-3 fs-5"></i>
                    <p className="mt-1">Analyzing the business' goals.</p>
                  </div>
                </li>
                {/*  */}
                <li
                  className="border-danger"
                  style={{ borderBottom: "dotted" }}
                >
                  <div className="d-flex ms-3 mt-2">
                    <i class="bi bi-record-circle me-3 fs-5"></i>
                    <p className="mt-1">
                      Deciding on the architecture and design
                    </p>
                  </div>
                </li>
                {/*  */}
                <li className="d-flex border-danger">
                  <div className="d-flex ms-3 mt-2">
                    <i class="bi bi-record-circle me-3 fs-5"></i>
                    <p className="mt-1">
                      The Infrastructure optimization and maintenance.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
      {/* ==================================================================================== */}
      <Getintouch2 />
      {/* ====================================================================================================== */}
    </>
  );
};

export default Integration;
