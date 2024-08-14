import Getintouch from "../../../components/GetInTouch/getintouch";
import { Helmet } from "react-helmet-async";

const Content = () => {
  return (
    <>
      <Helmet>
        <title>Content Marketing - Tech Solution, Digital Solution</title>
        <meta
          name="description"
          content="What is Content Marketing?
          Content marketing is a strategic digital marketing method that is focused on creating and providing relevant and useful content to a clearly defined audience.
          It is a marketing approach focused on distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience and, ultimately, to drive profitable customer action. "
        />
        <link
          rel="canonical"
          href="https://elonatech.com.ng/content-marketing"
        />
      </Helmet>

      {/*============================================================= Header =================================================*/}
      <div
        class="container-fluid bg-secondary py-5 "
        style={{
          height: "500px",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1709802556/contentPage/Content_marketing_ohj2ft.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div class="py-5 mt-5 ">
          <h2 class=" mt-5 text-white text-center">Content Marketing</h2>
          <h5 class=" mt-4 text-white text-center">
            Content is King! Quality content is part of all forms of marketing,
          </h5>
          <p class="lead text-white text-center">
            Marketing today is impossible without great content and should be
            integrated into marketing processes.
          </p>
        </div>
      </div>

      {/*=========================================================== content1 ==================================================*/}
      <section class="section mt-5" id="explore">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <h2 className="mb-4 text-dark fw-bold">
                What is Content Marketing?
              </h2>
              <span className="text-dark">
                Content marketing is a strategic digital marketing method that
                is focused on creating and providing relevant and useful content
                to a clearly defined audience.
              </span>
              <br />
              <br />
              <p className="text-dark">
                It is a marketing approach focused on distributing valuable,
                relevant, and consistent content to attract and retain a clearly
                defined audience and, ultimately, to drive profitable customer
                action.
              </p>
              <strong className="fw-bold text-dark">
                When businesses create excellent content marketing, they can
                expect one or more of these four benefits
              </strong>

              <div className="row mt-3">
                <div className="col-md-6">
                  <div className="">
                    <ul className="list-unstyled">
                      <li className="d-flex mb-2">
                        <i class="bi bi-check-circle-fill"></i>
                        <span className="ms-2  text-dark">Increased sales</span>
                      </li>
                      <li className="d-flex">
                        <i class="bi bi-check-circle-fill"></i>
                        <span className="ms-2 text-dark">
                          Better customers who have more loyalty
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="">
                    <ul className="list-unstyled">
                      <li className="d-flex mb-2">
                        <i class="bi bi-check-circle-fill"></i>
                        <span className="ms-2  text-dark">Cost savings </span>
                      </li>
                      <li className="d-flex">
                        <i class="bi bi-check-circle-fill"></i>
                        <span className="ms-2  text-dark">
                          Content-driven revenue (i.e profit center)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div className="text-center">
                <img
                  src="https://i.stack.imgur.com/qq8AE.gif"
                  data-src="https://res.cloudinary.com/elonatech/image/upload/v1709657624/contentPage/2._Content_Marketing_logo_removed_roukjn.png"
                  className="img-fluid lazyload"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*==================================================================== details  ========================================*/}
      <div class="section">
        <div class="container mt-5">
          <div class="row text-left mb-3">
            <div class="col-12"></div>
            <div class="col-lg-6">
              <h5 class="fw-bold heading  mb-4">
                Top Benefits of Content Marketing
              </h5>
              <ul className="list-unstyled">
                <li>
                  <div className="d-flex">
                    <i class="bi bi-check-circle-fill fs-4"></i>
                    <h6 className="ms-3 mt-2">Boost Your Website Traffic</h6>
                  </div>
                  <p className="">
                    Anyone serious about their digital marketing efforts knows
                    that it is impossible to win at SEO without a good content
                    strategy. Effective content is the foundation of organic
                    search and the best way to drive more traffic to your
                    website.
                  </p>
                </li>
                <li>
                  <div className="d-flex">
                    <i class="bi bi-check-circle-fill fs-4"></i>
                    <h6 className="ms-3 mt-2">Drives More Sales</h6>
                  </div>
                  <p className="">
                    Many people think that boosting website traffic (especially
                    inorganic traffic) will drive more sales. However, this is
                    not always the case. But content marketing ultimately helps
                    you with both - more traffic plus more sales.
                  </p>
                </li>
                <li>
                  <div className="d-flex">
                    <i class="bi bi-check-circle-fill fs-4"></i>
                    <h6 className="ms-3 mt-2">Better Customer Service</h6>
                  </div>
                  <p className="">
                    How many times does your customer service team need to
                    answer the same questions every day? Whether it is how to
                    sign up for a new service or how to use your product, an
                    informative blog can answer those questions.
                  </p>
                </li>
              </ul>
            </div>
            <div class="col-lg-6">
              <h5 className="text-center fw-bold">Multiple Learning Formats</h5>
              <p className="">
                Each customer has it's very own requirement and there is no
                universal format that can cater to all their needs at once.
                While some people like to read, others may prefer a video or
                listen to a podcast instead. <br />
                <strong className="fw-bold">
                  Here are some of the most common formats in content marketing
                  that you can use to your advantage
                </strong>
              </p>
              <ul className="list-unstyled">
                <li className="d-flex">
                  <span class="text-dark">1.</span>
                  <span className="ms-2  text-dark">Blog posts</span>
                </li>
                <li className="d-flex">
                  <span class="text-dark">2.</span>
                  <span className="ms-2  text-dark">White papers</span>
                </li>
                <li className="d-flex">
                  <span class="text-dark">3.</span>
                  <span className="ms-2  text-dark">Infographics</span>
                </li>
                <li className="d-flex">
                  <span class="text-dark">4.</span>
                  <span className="ms-2  text-dark">Webinars</span>
                </li>
                <li className="d-flex">
                  <span class="text-dark">5.</span>
                  <span className="ms-2  text-dark">Podcasts</span>
                </li>
                <li className="d-flex">
                  <span class="text-dark">6.</span>
                  <span className="ms-2  text-dark">Interviews</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/*==================================================================== content2 ==========================================*/}
      <div className="container  mb-5" style={{ marginTop: "" }}>
        <div class="row justify-content-center align-items-center">
          <div class="col-md-6">
            <div className="text-center">
              <img
                src="https://i.stack.imgur.com/qq8AE.gif"
                data-src="https://res.cloudinary.com/elonatech/image/upload/v1709657627/contentPage/Content-marketing-cycle_a2cbnq.webp"
                alt=""
                className="img-fluid rounded lazyload"
                srcset=""
              />
            </div>
          </div>
          <div class="col-md-6 mt-4">
            <h2 className="mb-4 mt-5">Why use content marketing?</h2>
            <p style={{ textAlign: "justify" }}>
              Content should be integrated into your marketing process, not
              treated as something separate. Quality content is part of all
              forms of marketing, including:
            </p>
            <ul className="list-unstyled">
              <li>
                <div className="d-flex">
                  <i class="bi bi-check-circle-fill fs-4"></i>
                  <h6 className="ms-3 mt-2">Email marketing</h6>
                </div>
                <p className="">
                  Consistently great content trains your audience to anticipate,
                  open and read emails from your brand.
                </p>
              </li>
              <li>
                <div className="d-flex">
                  <i class="bi bi-check-circle-fill fs-4"></i>
                  <h6 className="ms-3 mt-2">Social media marketing</h6>
                </div>
                <p className="">
                  Content marketing strategy comes before your social media
                  strategy.
                </p>
              </li>
              <li>
                <div className="d-flex">
                  <i class="bi bi-check-circle-fill fs-4"></i>
                  <h6 className="ms-3 mt-2">SEO</h6>
                </div>
                <p className="">
                  Search engines reward businesses that publish quality,
                  consistent content.
                </p>
              </li>
              <li>
                <div className="d-flex">
                  <i class="bi bi-check-circle-fill fs-4"></i>
                  <h6 className="ms-3 mt-2">PR</h6>
                </div>
                <p className="">
                  Successful PR strategies should address issues readers care
                  about, not their business.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*================================================================== content3 ============================================*/}
      <div className="container  mb-5" style={{ marginTop: "" }}>
        <div class="row justify-content-center">
          <div class="col-md-6 mt-5">
            <ul className="list-unstyled">
              <li>
                <div className="d-flex">
                  <i class="bi bi-check-circle-fill fs-4"></i>
                  <h6 className="ms-3 mt-2">PPC</h6>
                </div>
                <p className="">
                  {" "}
                  For PPC to work, you need great content behind it.
                </p>
              </li>
              <li>
                <div className="d-flex">
                  <i class="bi bi-check-circle-fill fs-4"></i>
                  <h6 className="ms-3 mt-2">Inbound marketing</h6>
                </div>
                <p className="">
                  Content is critical to driving inbound traffic and leads.
                </p>
              </li>
              <li>
                <div className="d-flex">
                  <i class="bi bi-check-circle-fill fs-4"></i>
                  <h6 className="ms-3 mt-2">Digital marketing</h6>
                </div>
                <p className="">
                  {" "}
                  Content marketing forms the foundation for an improved or
                  rebooted integrated digital marketing strategy.
                </p>
              </li>
              <li>
                <div className="d-flex">
                  <i class="bi bi-check-circle-fill fs-4"></i>
                  <h6 className="ms-3 mt-2">Content strategy</h6>
                </div>
                <p className="">
                  Content strategy (which determines how content is created and
                  managed throughout an organization) must be considered in any
                  content marketing approach.
                </p>
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <div className="text-center">
              <img
                src="https://i.stack.imgur.com/qq8AE.gif"
                data-src="https://res.cloudinary.com/elonatech/image/upload/v1709657623/contentPage/Content-Marketing-Process-removebg-preview_c81gsg.png"
                alt=""
                className="img-fluid rounded lazyload"
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================================================================================= */}
      <Getintouch />
      {/* ======================================================================================================================= */}
    </>
  );
};

export default Content;
