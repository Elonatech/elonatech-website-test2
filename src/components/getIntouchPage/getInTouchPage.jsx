import "./getInTouchPage.css";
import ProjectForm from "../forms/projectForm";
import ConsultForm from "../forms/consultForm";
import ContactUsPage from "../forms/contactUsPage";
import CallBackForm from "../forms/callBackForm";

import { Helmet } from "react-helmet-async";

const GetInTouchPage = () => {
  return (
    <>
      <Helmet>
        <title>Get in Touch - Tech Solution, Digital Solution</title>
        <meta
          name="description"
          content=" 
       We Provide The Exceptional Customer Service We'd Want to Experience Ourselves
       You're not going to hit a ridiculously long phone menu, when you call us. Your email isn't going to the inbox abyss, never to be seen or heard from again.
       Get in touch with us today.
       We’d love to hear from you.
       Send us a message and we’ll respond as soon as possible.
       "
        />
        <link rel="canonical" href="https://elonatech.com.ng/get-in-touch" />
      </Helmet>

      {/*=============================================================== header  ================================================*/}
      <div
        class="container-fluid py-5 "
        style={{
          minHeight: "500px",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1709803842/getInTouchPage/Customer_Service_pe5xnx.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div class="py-5 mt-5 ">
          <h2 class=" mt-5 text-white text-center">Get in Touch</h2>
          <h5 class=" mt-4 text-white text-center">
            We Provide The Exceptional Customer Service We'd Want to Experience
            Ourselves
          </h5>
          <p class="lead text-white text-center">
            You're not going to hit a ridiculously long phone menu, when you
            call us. Your email isn't going to the inbox abyss, never to be seen
            or heard from again.
          </p>
        </div>
      </div>
      {/* ===========================================   ============================= */}
      <div className="container mt-5 mb-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="card border-0">
              <h2 className="fw-bold">Get in touch with us today.</h2>
              <h6 className="mt-2">We’d love to hear from you.</h6>
              <p className="">
                Send us a message and we’ll respond as soon as possible.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0">
              <img
                src="https://res.cloudinary.com/elonatech/image/upload/v1710164778/loaderImage/Loading_icon_wrnmya.gif"
                data-src="https://res.cloudinary.com/elonatech/image/upload/v1709803845/getInTouchPage/Customer_Support_nes0ot.png"
                className="img-fluid rounded lazyload"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/*============================================ ===============================================*/}
      <div className="container">
        <div class="row align-items-center mt-5">
          <div class="col-md-3 mb-3">
            <div
              className=""
              style={{
                height: "230px",
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1706795181/getInTouchPage/old-blue-dial-telephone-white-background-3d-illustration_101266-2521_psrxnm.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                color: "#f0f0f0"
              }}
            >
              <div className="text-center pt-5">
                <h5>DO YOU WANT TO CONTACT US?</h5>
                <CallBackForm />
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3 ">
            <div
              className=""
              style={{
                height: "230px",
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1706795180/getInTouchPage/focused-african-american-office-manager-sitting-office-with-laptop-reading-important-documents-with-puzzled-expression-holding-head-with-his-hand_1258-3884_cz543d.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                color: "#f0f0f0"
              }}
            >
              <div className="text-center pt-5">
                <h5>CAN WE CALL YOU BACK NOW?</h5>
                <ContactUsPage />
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div
              className=""
              style={{
                height: "230px",
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1706795185/getInTouchPage/business-people-doing-handshake-partnership-agreeing-startup-collaboration-teamwork-company-presentation-working-with-research-data-documents-laptop-office_482257-49371_xjiblq.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                color: "#f0f0f0"
              }}
            >
              <div className="text-center pt-5">
                <h5>FREE CONSULTING</h5>
                <ConsultForm />
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div
              className=""
              style={{
                height: "230px",
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1706795183/getInTouchPage/attractive-african-businessman-glasses-suit-holding-papers_273609-9306_qmeads.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                color: "#f0f0f0"
              }}
            >
              <div className="text-center pt-5">
                <h5>READY TO DISCUSS YOUR PROJECT?</h5>
                <ProjectForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*============================================  ===============================================*/}
      <div className="container">
        <div class="row align-items-center mt-5">
          <div class="col-md-3">
            <div className="card border-0">
              <div className="row g-0">
                <div className="col-3">
                  <div className="card border-0">
                    <i class="bi bi-geo-alt-fill text-center fs-3 text-danger"></i>
                  </div>
                </div>
                <div className="col-9">
                  <div className="card border-0">
                    <h5 className="refd">ADDRESS:</h5>
                    <h6>
                      4 Oluwakemi Street, Shasha Road, Egbeda, Lagos 100001
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div className="card border-0">
              <div className="row g-0">
                <div className="col-3">
                  <div className="card border-0">
                    <i class="bi bi-envelope-fill mt-0 text-center fs-3 text-danger"></i>
                  </div>
                </div>
                <div className="col-9">
                  <div className="card border-0">
                    <h5 className="refd">EMAIL:</h5>
                    <h6 className="">
                      info@elonatech.com.ng elonatechnigeria@gmail.com
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div className="card border-0 mt-4">
              <div className="row g-0">
                <div className="col-3">
                  <div className="card border-0">
                    <i class="bi bi-telephone-fill mt-0 text-center fs-3 text-danger"></i>
                  </div>
                </div>
                <div className="col-9">
                  <div className="card border-0">
                    <h5 className="refd">PHONE:</h5>
                    <h6>
                      (+234) 9014544520 <br />
                      (+234) 8027602020 <br />
                      (+234) 7088436727
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div className="card border-0">
              <div className="row g-0">
                <div className="col-3">
                  <div className="card border-0">
                    <i class="bi bi-people-fill mt-0 text-center fs-3 text-danger"></i>
                  </div>
                </div>
                <div className="col-9">
                  <div className="card border-0">
                    <h5 className="refd">WORKING HOURS:</h5>
                    <h6>8am - 5pm Weekdays</h6>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*============================================  ===============================================*/}
      <div className="container">
        <div className="mt-5 mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15853.951982179386!2d3.287650187158208!3d6.5860998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93d2930e07a3%3A0x3f8f3db6f881bb66!2sElonatech%20Nigeria%20Limited!5e0!3m2!1sen!2sng!4v1705073240920!5m2!1sen!2sng"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default GetInTouchPage;
