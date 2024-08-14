import Getintouch2 from "../../components/GetInTouch/getintouch2";
import { Helmet } from "react-helmet-async";

const Voip = () => {
  return (
    <>
      <Helmet>
        <title>Voice Over Internet Protocol (VoIP) - Tech Solution</title>
        <meta
          name="description"
          content="Flexible VoIP Phone Systems
          Voice over IP (VoIP) is synonymous with business telephony, and for good reason. If you want improved call quality combined with a rich menu of features and lower costs, explore our top-rated VoIP service. 
          We help organizations to communicate better. We provide the leading VoIP phone service that goes beyond the capabilities of a traditional small business phone system. We do this by adding unparalleled features, control, call management and cost savings. Our VoIP phone service allows our customers to collaborate at any time on any device, anywhere. That’s part of what makes our VoIP phone company a different VoIP phone service and solution provider. "
        />
        <link rel="canonical" href="https://elonatech.com.ng/voip" />
      </Helmet>

      {/*===================================================================== header =================================================*/}
      <div
        class="container-fluid bg-secondary py-5 "
        style={{
          height: "500px",
          marginBottom: "100px",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1709648542/voipPage/voipHeader_e2njfe.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div class="py-5 mt-5 ">
          <h2 class=" mt-5 text-white text-center">
            Voice Over Internet Protocol (VoIP)
          </h2>
          <h5 class=" mt-4 text-white text-center">
            Transforming your Communication{" "}
          </h5>
          <p class="  lead text-white text-center">
            Cut cost, improve remote collaboration and increase efficiency.
            Everything's going digital, traditional phone lines are going away
          </p>
        </div>
      </div>

      {/*====================================================================== body ==================================================*/}
      <div className="container  mb-5" style={{ marginTop: "100px" }}>
        <div class="row justify-content-center align-items-center  g-2">
          <div class="col-md-6 ps-5">
            <h2 className="mb-4 mt-3">Flexible VoIP Phone Systems</h2>
            <p className="fs-6" style={{ textAlign: "justify" }}>
              Voice over IP (VoIP) is synonymous with business telephony, and
              for good reason. If you want improved call quality combined with a
              rich menu of features and lower costs, explore our top-rated VoIP
              service.
              <br />
              <br />
              We help organizations to communicate better. We provide the
              leading VoIP phone service that goes beyond the capabilities of a
              traditional small business phone system. We do this by adding
              unparalleled features, control, call management and cost savings.
              Our VoIP phone service allows our customers to collaborate at any
              time on any device, anywhere. That’s part of what makes our VoIP
              phone company a different VoIP phone service and solution
              provider.
            </p>
          </div>
          <div class="col-md-6">
            <div className="text-center">
              <img
                src="https://i.stack.imgur.com/qq8AE.gif"
                data-src="https://res.cloudinary.com/elonatech/image/upload/v1709648091/voipPage/voip-image_yipevc.jpg"
                alt=""
                className="img-fluid lazyload rounded"
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>

      {/*=========================================================================== flex display ===============================================*/}
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-4">
            <h5>High-definition video</h5>
            <h6>
              Watch what’s happening in 1080p HD video with 8x digital zoom.
            </h6>
          </div>
          <div className="col-md-4">
            <h5>Unlimited cloud storage</h5>
            <h6>
              Your videos are saved automatically on our secure servers for 30
              days.*
            </h6>
          </div>
          <div className="col-md-4 mt-3">
            <h5>Rechargeable battery</h5>
            <h6>Lasts up to 3-6 months before it needs a recharge.*</h6>
          </div>
        </div>
      </div>
      {/*================================================================= body =====================================================*/}
      <div className="container  mb-5" style={{ marginTop: "100px" }}>
        <div class="row justify-content-center  g-2">
          <div class="col-md-6">
            <div className="text-center">
              <img
                src="https://i.stack.imgur.com/qq8AE.gif"
                data-src="https://res.cloudinary.com/elonatech/image/upload/v1709648126/voipPage/call-center_fb1qzk.jpg"
                alt=""
                className="img-fluid lazyload rounded"
                srcset=""
              />
            </div>
          </div>
          <div class="col-md-6 ps-5">
            <h2 className="mb-4 mt-4">VoIP for Business</h2>
            <p className="fs-6" style={{ textAlign: "justify" }}>
              We understand that implementing the right business VoIP phone
              system is critical for your organization's operations. As a VoIP
              systems and solution provider, we understand and recognize the
              requirements needed within businesses. <br />
              <br /> From small business VoIP phone systems to large, our
              solutions will give you unrivalled functionality. VoIP goes beyond
              the capabilities of a traditional phone system by adding
              unparalleled features, control, call management and cost savings.
            </p>
          </div>
        </div>
      </div>
      {/*=========================================================================================================  */}
      <Getintouch2 />
    </>
  );
};

export default Voip;
