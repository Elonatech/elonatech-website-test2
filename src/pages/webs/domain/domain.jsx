import "./domain.css";
import Getintouch from "../../../components/GetInTouch/getintouch";
import { Helmet } from "react-helmet-async";

const Domain = () => {
  return (
    <>
      <Helmet>
        <title>Domain Registration - Tech Solution, Digital Solution</title>
        <meta
          name="description"
          content="At Elonatech we take pride in providing secure, reliable & affordable Domain Registration to all our clients. That is why we offer the best industry prices not only for new domains registered with us but also for Domain Renewals & hassle free Domain Transfers to us.
           You can easily register any domain name of your choice with us. We offer several global domain extensions including major TLDs like .com, .net, .biz, .org & also popular ccTLDs including .ng (NIRA), .com.ng, .in, .co.in, .co, .co.uk, .pw and many other popular domain extensions. Our domain registration prices start from as low as $9. "
        />
        <link rel="canonical" href="https://elonatech.com.ng/domain" />
      </Helmet>

      {/*========================================================================= header ====================================================*/}
      <div
        class="container-fluid bg-secondary py-5 "
        style={{
          height: "500px",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1709817744/domainPage/domain_frwxpc.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div class="py-5 mt-5 ">
          <h2 class=" mt-5 text-white text-center">Domain Registration</h2>
          <h5 class=" mt-4 text-white text-center">
            Everything You Need To Succeed Online, It all starts with a great
            domain
          </h5>
          <p class="lead text-white text-center">
            Get your website online today! Register .com.ng, .ng Domains and Get
            Free DNS & Email Hosting.
          </p>
        </div>
      </div>

      {/*========================================================= Register Domain Section Begin ================================================*/}
      <section class="register-domain spad">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
              <div class="register__text">
                <div class="section-title">
                  <h3 className="text-center mb-4 fw-bold">
                    Register Your Domain Now!
                  </h3>
                </div>
                <div class="register__form">
                  <form action="#">
                    <input type="text" placeholder="ex: cloudhost" />
                    <div class="change__extension">
                      .com{" "}
                      <i
                        class="bi bi-caret-down-fill ms-2"
                        style={{ position: "absolute", top: "3px" }}
                      ></i>
                      <ul>
                        <li>.dev</li>
                        <li>.org</li>
                        <li>.com.ng</li>
                      </ul>
                    </div>
                    <button type="submit" class="site-btn">
                      Search
                    </button>
                  </form>
                </div>
                {/*=================================================================== domain ===============================================================*/}
                <div className="container mt-4 mb-4">
                  <div class="row">
                    <div class="col-6 col-md-3">
                      <div className="text-center">
                        <div class="register__result">
                          <ul>
                            <li>
                              .com <span>$16.99</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-6 col-md-3">
                      <div className="text-center">
                        <div class="register__result">
                          <ul>
                            <li>
                              .dev <span>$21.99</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-6 col-md-3">
                      <div className="text-center">
                        <div class="register__result">
                          <ul>
                            <li>
                              .org <span>$18.99</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-6 col-md-3">
                      <div className="text-center">
                        <div class="register__result">
                          <ul>
                            <li>
                              .com.ng <span>$9.00</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="">
                  The right domain name goes a long way. Expect greater traction
                  with your target audience, a unique online presence and your
                  own identity in an ever-growing market. Find your perfect
                  domain now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*==============================================      ============================================*/}
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="mt-4">
              <p className="">
                At Elonatech we take pride in providing secure, reliable &
                affordable Domain Registration to all our clients. That is why
                we offer the best industry prices not only for new domains
                registered with us but also for Domain Renewals & hassle free
                Domain Transfers to us.
                <br />
                <br />
                You can easily register any domain name of your choice with us.
                We offer several global domain extensions including major TLDs
                like .com, .net, .biz, .org & also popular ccTLDs including .ng
                (NIRA), .com.ng, .in, .co.in, .co, .co.uk, .pw and many other
                popular domain extensions. Our domain registration prices start
                from as low as $9.
                <br />
                <br />
                All the domain names registered with us come with 24x7 Support &
                many free services worth over $15 including Free DNS Service,
                Free Privacy Protection to hide your whois information from
                spammers & data miners, Free Domain Forwarding, Unlimited Mail
                Forwards, Domain Theft Protection & Registrar Lock to prevent
                Unauthorized domain transfer.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center">
              <img
                src="https://i.stack.imgur.com/qq8AE.gif"
                data-src="https://res.cloudinary.com/elonatech/image/upload/v1709647317/domainPage/domain-1-removebg-preview_zveocr.png"
                className="lazyload img-fluid me-3"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/*================================================================ What do you get   ===========================================================*/}
      <div className="container mt-5">
        <p className="fs-2 fw-bold text-center">What You Get?</p>
        <p className="mb-4 text-center">
          Everything you could ever ask for. Register with us for the most
          comprehensive set of tools and features for the ideal domain name
          experience.
        </p>
        <div className="row">
          <div className="col-md-6">
            <div className="ms-5">
              <div className="d-flex">
                <i class="bi bi-file-earmark-pdf-fill fs-3 ms-2"></i>
                <h5 className="ms-3 mt-2">Content Management</h5>
              </div>
              <p className="ms-5">
                Manage domain registrant, admin, and technical contacts. <br />{" "}
                Change them, execute trade or transfers, and update contact{" "}
                <br /> details in bulk.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="ms-5">
              <div className="d-flex">
                <i class="bi bi-clipboard-check-fill fs-3 ms-2"></i>
                <h5 className="ms-3 mt-2 ">Always in Your Name</h5>
              </div>
              <p className="ms-5">
                Your domain will always be registered under your own name.{" "}
                <br /> No compromises or losing it in the future
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="ms-5">
              <div className="d-flex">
                <i class="bi bi-shield-lock-fill fs-3 ms-2"></i>
                <h5 className="ms-3 mt-2">Free Privacy Protection</h5>
              </div>
              <p className="ms-5">
                Privacy is paramount to us, so full WHOIS privacy protection is
                included <br /> and enabled as a standard at no extra cost.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="ms-5">
              <div className="d-flex">
                <i class="bi bi-usb-mini-fill fs-3 ms-2"></i>
                <h5 className="ms-3 mt-2">Transfer Free Of Charges</h5>
              </div>
              <p className="ms-5">
                No stealth fees for transferring out. Generate your
                authorization <br /> codes and lock your domain via our control
                panel.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*================================================================ Choose Plan Section Begin  ====================================================*/}
      <section class="choose-plan-section" style={{ marginTop: "80px" }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div className="text-center">
                <img
                  src="https://i.stack.imgur.com/qq8AE.gif"
                  data-src="https://res.cloudinary.com/elonatech/image/upload/v1709647318/domainPage/choose-plan_sqw915.png"
                  className="lazyload img-fluid me-3"
                  alt=""
                />
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="plan__text">
                <h3>
                  Every great website starts with a domain. Our domain name
                  registration includes!
                </h3>
                <ul className="list-unstyled">
                  <li>
                    <span class="fa fa-check me-3 text-danger"></span>Free DNS
                    Management
                  </li>
                  <li>
                    <span class="fa fa-check me-3 text-danger"></span>Multiple
                    Year Discount
                  </li>
                  <li>
                    <span class="fa fa-check me-3 text-danger"></span>Free
                    Renewal With Transfer
                  </li>
                  <li>
                    <span class="fa fa-check me-3 text-danger"></span>Instant
                    Activation
                  </li>
                  <li>
                    <span class="fa fa-check me-3 text-danger"></span>Registrar
                    Lock
                  </li>
                  <li>
                    <span class="fa fa-check me-3 text-danger"></span>Over 400
                    Domain Extensions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============================================================================= */}
      <Getintouch />
      {/* ============================================================================= */}
    </>
  );
};

export default Domain;
