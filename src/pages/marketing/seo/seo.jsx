import "./seo.css";
import Getintouch from "../../../components/GetInTouch/getintouch";
import { Helmet } from "react-helmet-async";

const Seo = () => {
  return (
    <>
      <Helmet>
        <title>Search Engine Optimization - Tech Solution</title>
        <meta
          name="description"
          content="The goal is simple: Optimizing pages and putting in best practices to rank websites on search engines.
         Elonatech stands apart from other SEO firms because we approach organic search traffic as a powerful marketing channel on its own right.
         Our rigorous process draws from six areas of discipline to optimize and amplify organic traffic into a strategic pipeline of prospective customers."
        />
        <link rel="canonical" href="https://elonatech.com.ng/seo" />
      </Helmet>
      {/*========================================================================================= header ================================================= */}
      <div
        class="container-fluid bg-secondary  py-5 "
        style={{
          height: "500px",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1709803584/seoPage/seo_bafei2.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div class="py-5 mt-5 ">
          <h2 class=" mt-5 text-white text-center">
            Search Engine Optimization
          </h2>
          <h5 class=" mt-4 text-white text-center">
            A vital part of digital marketing that helps you get found online
            via search
          </h5>
          <p class="lead text-white text-center">
            The goal is simple: Optimizing pages and putting in best practices
            to rank websites on search engines
          </p>
        </div>
      </div>

      {/*=============================================================== D =========================================================================*/}
      <div class="section-top-border mt-5">
        <div className=""></div>
        <div className="container">
          <div class="row align-items-center">
            <div class="col-md-6 ">
              <h3 className="fw-bold mb-3">Our Services</h3>
              <p className="">
                Elonatech stands apart from other SEO firms because we approach
                organic search traffic as a powerful marketing channel on its
                own right.
                <br />
                <br />
                Our rigorous process draws from six areas of discipline to
                optimize and amplify organic traffic into a strategic pipeline
                of prospective customers.
              </p>
              <p className="">
                Explore our SEO services page to find a 1-month campaign
                schedule and a complete list of services you can expect from an
                SEO expert agency like Elonatech.
                <br />
                <br />
              </p>
            </div>
            {/*=======================================================================================================================================  */}
            <div class="col-md-6">
              <div className="text-center">
                <img
                  src="https://i.stack.imgur.com/qq8AE.gif"
                  data-src="https://res.cloudinary.com/elonatech/image/upload/v1709660086/seoPage/seo2_nllimj.png"
                  className="img-fluid lazyload rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*==================================================================  ========================================================================*/}
      <div class="section-top-border mt-5">
        <div className=""></div>
        <div className="container ">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div className="text-center">
                <img
                  src="https://i.stack.imgur.com/qq8AE.gif"
                  data-src="https://res.cloudinary.com/elonatech/image/upload/v1711626740/seoPage/seo_mryeoa.jpg"
                  alt=""
                  class="img-fluid lazyload rounded"
                />
              </div>
            </div>
            <div class="col-md-6">
              <h3 className="fw-bold">Our SEO Campaign Services</h3>
              <p className="">
                You want to buy a Google SEO package for your business. We
                specialize in improving organic traffic for websites in all
                verticals through Google SEO services. Reach your entire target
                audience, acquiring more market share. Organic discovery and
                high quality website traffic. Get a custom Google SEO strategy
                from us that drives the results that matter to your business.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex">
                    <i class="bi bi-check-circle-fill fs-4"></i>
                    <h6 className="ms-3 mt-2 fw-bold ">Complete On-page SEO</h6>
                  </div>
                  {/*  */}
                  <div className="d-flex">
                    <i class="bi bi-check-circle-fill fs-4"></i>
                    <h6 className="ms-3 mt-2 fw-bold">Off-page SEO</h6>
                  </div>
                  {/*  */}
                  <div className="d-flex">
                    <i class="bi bi-check-circle-fill fs-4"></i>
                    <h6 className="ms-3 mt-2 fw-bold">SEO content writing</h6>
                  </div>
                  {/*  */}

                  <div className="d-flex">
                    <i class="bi bi-check-circle-fill fs-4"></i>
                    <h6 className="ms-3 mt-2 fw-bold">On-going SEO</h6>
                  </div>
                  <div className="d-flex">
                    <i class="bi bi-check-circle-fill fs-4"></i>
                    <h6 className="ms-3 mt-2 fw-bold">
                      Technical Consultation
                    </h6>
                  </div>
                </div>
                <div className="col-md-6">
                  {/*  */}
                  <div className="d-flex">
                    <i class="bi bi-check-circle-fill fs-4"></i>
                    <h6 className="ms-3 mt-2 fw-bold">Competitor research</h6>
                  </div>
                  {/*  */}
                  <div className="d-flex">
                    <i class="bi bi-check-circle-fill fs-4"></i>
                    <h6 className="ms-3 mt-2 fw-bold">Keyword research</h6>
                  </div>
                  <div className="d-flex">
                    <i class="bi bi-check-circle-fill fs-4"></i>
                    <h6 className="ms-3 mt-2 fw-bold">
                      Social Media Optimization
                    </h6>
                  </div>
                  <div className="d-flex">
                    <i class="bi bi-check-circle-fill fs-4"></i>
                    <h6 className="ms-3 mt-2 fw-bold">Fast Rankings</h6>
                  </div>

                  <div className="d-flex">
                    <i class="bi bi-check-circle-fill fs-4"></i>
                    <h6 className="ms-3 mt-2 fw-bold">
                      Reporting and Insights
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*================================================================= IE ======================================================================*/}
      <div className="container mt-5">
        <h3 className="fw-bold">Industry Expertise</h3>
        <p className="">
          Art & Design, Automotive, Aviation, Cryptocurrency & Blockchain,
          Education, Energy & Utilities, Finance & Accounting, Food & Beverage,
          Government & Public Sector, HR & Business Services, Insurance, Legal,
          Manufacturing & Construction, Media & Entertainment, Nonprofit, Real
          Estate, Retail & Consumer Goods, Science & Medicine, Sports &
          Recreation, Supply Chain & Logistics, Tech & IT, Travel & Hospitality.
        </p>
      </div>
      {/*================================================================ T ========================================================================*/}
      <div class="container mt-5 mb-5">
        <table class="table table-striped bor table-hover">
          <thead className="border-0">
            <tr className="border-0">
              <th className="border-0">Service Tiers</th>
              <th className="border-0">Starter #45,000</th>
              <th className="border-0">Standard #55,000</th>
              <th className="border-0">Advanced #75,000</th>
            </tr>
          </thead>
          <tbody>
            <tr class="" style={{ backgroundColor: "#57719f" }}>
              <td class="border-0 text-light">Delivery Time</td>
              <td class="border-0 text-light">20 days</td>
              <td class="border-0 text-light">20 days</td>
              <td class="border-0 text-light">30days</td>
            </tr>
            <tr class="table">
              <td>Number of Revisions</td>
              <td>1</td>
              <td>1</td>
              <td>2</td>
            </tr>
            <tr className="" style={{ backgroundColor: "#57719f" }}>
              <td class="border-0 text-light">
                Number of Competitors Researched
              </td>
              <td class="border-0 text-light">3</td>
              <td class="border-0 text-light">3</td>
              <td class="border-0 text-light">5</td>
            </tr>
            <tr class="">
              <td class="border-0">SEO Audit & Report</td>
              <td class="border-0">-</td>
              <td class="border-0">-</td>
              <td class="border-0">
                <i class="bi bi-check-lg fs-5"></i>
              </td>
            </tr>
            <tr class="" style={{ backgroundColor: "#57719f" }}>
              <td className="border-0 text-light">Tailored Action Plan</td>
              <td class="border-0 text-light">
                <i class="bi bi-check-lg fs-5"></i>
              </td>
              <td class="border-0 text-light">
                <i class="bi bi-check-lg fs-5"></i>
              </td>
              <td class="border-0 text-light">
                <i class="bi bi-check-lg fs-5"></i>
              </td>
            </tr>
            <tr class="">
              <td class="border-0">SEO Optimization</td>
              <td class="border-0">
                <i class="bi bi-check-lg fs-5"></i>
              </td>
              <td class="border-0">
                <i class="bi bi-check-lg fs-5"></i>
              </td>
              <td class="border-0">
                <i class="bi bi-check-lg fs-5"></i>
              </td>
            </tr>
            <tr class="" style={{ backgroundColor: "#57719f" }}>
              <td className="text-white">Bad Link Removal</td>
              <td className="text-white">-</td>
              <td className="text-white">-</td>
              <td className="text-white">
                <i class="bi bi-check-lg fs-5"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* ======================================================================= */}
      <Getintouch />
      {/* ======================================================================= */}
    </>
  );
};

export default Seo;
