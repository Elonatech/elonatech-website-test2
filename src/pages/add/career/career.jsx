import { Link } from "react-router-dom";
import "./career.css";
import { Helmet } from "react-helmet-async";

const Career = () => {
  return (
    <>
      <Helmet>
        <title>Career - Tech Solution, Digital Solution</title>
        <meta
          name="description"
          content="Build a Career With Us
           In our bid to promote operational excellence and lead in the delivery of IT solutions across Nigeria and beyond, our pursuit for the best hands is the cornerstone of our recruitment policy. Elonatech seeks people who are self-driven, strong-willed, result-oriented and performance-driven, to find brighter, smarter and innovative solutions to problems and ignite our world. "
        />
        <link rel="canonical" href="https://elonatech.com.ng/career" />
      </Helmet>

      {/*============================================================================= header =============================================================*/}
      <div
        class="container-fluid  py-5 "
        style={{
          height: "500px",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1709288295/careerPage/career_page_testing_1_clrx3t.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "",
          backgroundSize: "cover"
        }}
      >
        <div class="py-5 mt-5 ">
          <h2 class=" mt-5 text-white text-center">Career</h2>
          <h5 class=" mt-4 text-white text-center">Let's grow together</h5>
          <p class="lead text-white text-center">
            We’re building a culture at Elonatech where amazing people (like
            you) can do their best work. <br /> If you’re ready to grow your
            career and help millions of organizations and SME grow better,
            you’ve come to the right place.
          </p>
        </div>
      </div>

      <div className="container">
        <div class="row justify-content-center mt-5 align-items-center">
          <div class="col-md-6">
            <div className="">
              <div className="pt-2">
                <h4
                  style={{ fontSize: "", fontWeight: "800", color: "#34548c" }}
                >
                  Build a Career With Us
                </h4>
              </div>
              <div className="pt-">
                <p className="text-justify" style={{ lineHeight: "2" }}>
                  In our bid to promote operational excellence and lead in the
                  delivery of IT solutions across Nigeria and beyond, our
                  pursuit for the best hands is the cornerstone of our
                  recruitment policy. Elonatech seeks people who are
                  self-driven, strong-willed, result-oriented and
                  performance-driven, to find brighter, smarter and innovative
                  solutions to problems and ignite our world. People who can
                  transform their potentials into solutions; and People who work
                  with diverse minds to solve global issues.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6 ">
            <div className="text-center">
              <img
                src="https://i.stack.imgur.com/qq8AE.gif"
                data-src="https://res.cloudinary.com/elonatech/image/upload/v1709823779/groupPicture/admin_d4aiix.jpg"
                className="img-fluid rounded lazyload mb-2"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================================================================================== */}
      <div className="pb-5" style={{ backgroundColor: "#F9F8F3" }}>
        <div className="pt-4 text-center">
          <h4 style={{ color: "#34548c" }}>
            <span style={{ color: "#34548c", fontWeight: "800" }}>Job </span>
            Role Applying For?
          </h4>
          <p>
            We develop an individual integrated solution for your business and
            select a unique set of services for <br /> it, combining them with a
            single strategy and goal
          </p>
        </div>
        <div className="container">
          <div class="row align-items-center pt-md-5">
            <div class="col-md-4">
              <div class="card h-100 ">
                <img
                  src="https://i.stack.imgur.com/qq8AE.gif"
                  data-src="https://res.cloudinary.com/elonatech/image/upload/v1709662758/careerPage/illustration_s7lm6h.png"
                  className="lazyload"
                  alt=""
                  style={{
                    width: "20%",
                    borderRadius: "10%",
                    margin: "10px 20px"
                  }}
                />
                <div class="card-body">
                  <h5 class="card-title fs-5 fw-bold">
                    Graphic Designer / Digital Marketer
                  </h5>
                  <p class="card-text" style={{ fontWeight: "600" }}>
                    with at least 1 year work experience with proof of
                    professional Graphics Design and Animations.
                  </p>
                  <Link to="/graphic-career" class="btn btn-primary">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100 ">
                <img
                  src="https://i.stack.imgur.com/qq8AE.gif"
                  data-src="https://res.cloudinary.com/elonatech/image/upload/v1709662773/careerPage/web-development_psuko3.png"
                  className="lazyload"
                  alt=""
                  style={{
                    width: "20%",
                    borderRadius: "10%",
                    margin: "10px 20px"
                  }}
                />
                <div class="card-body">
                  <h5 class="card-title fs-5 fw-bold">
                    Full Stack Web developer
                  </h5>
                  <p class="card-text" style={{ fontWeight: "600" }}>
                    Must have at least 2 years' work experience with proof of
                    Web Development.
                  </p>
                  <Link to="/web-career" class="btn btn-primary">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100 ">
                <img
                  src="https://i.stack.imgur.com/qq8AE.gif"
                  data-src="https://res.cloudinary.com/elonatech/image/upload/v1709662766/careerPage/social-media_iund4b.png"
                  className="lazyload"
                  alt=""
                  style={{
                    width: "20%",
                    borderRadius: "10%",
                    margin: "10px 20px"
                  }}
                />
                <div class="card-body">
                  <h5 class="card-title fs-5 fw-bold">Digital Marketer</h5>
                  <p class="card-text" style={{ fontWeight: "600" }}>
                    Must have at least 1 year work experience with proof of
                    professional Digital Marketing.
                  </p>
                  <Link to="/digital-career" class="btn btn-primary">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div class="row align-items-center mt-4">
            <div class="col-md-4">
              <div class="card h-100 ">
                <img
                  src="https://i.stack.imgur.com/qq8AE.gif"
                  data-src="https://res.cloudinary.com/elonatech/image/upload/v1709662762/careerPage/montage_brxkxi.png"
                  className="lazyload"
                  alt=""
                  style={{
                    width: "20%",
                    borderRadius: "10%",
                    margin: "10px 20px"
                  }}
                />
                <div class="card-body">
                  <h5 class="card-title fs-5 fw-bold">
                    Animations/Motion Graphics & UI/UX Graphic Designer
                  </h5>
                  <p class="card-text" style={{ fontWeight: "600" }}>
                    Must be able to use Figma,Adobe XD,Photoshop etc.
                  </p>
                  <Link to="/animation-career" class="btn btn-primary">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card h-100 " style={{ height: "70vh" }}>
                <img
                  src="https://i.stack.imgur.com/qq8AE.gif"
                  data-src="https://res.cloudinary.com/elonatech/image/upload/v1709662770/careerPage/ux-design_kjglok.png"
                  className="lazyload"
                  alt=""
                  style={{
                    width: "20%",
                    borderRadius: "10%",
                    margin: "10px 20px"
                  }}
                />
                <div class="card-body">
                  <h5 class="card-title fs-5 fw-bold">
                    Systems/Network Engineer
                  </h5>
                  <p class="card-text" style={{ fontWeight: "600" }}>
                    minimum of 2 years' experience in maintenance of computer
                    hardware , software systems and supporting network.
                  </p>
                  <Link to="/system-career" class="btn btn-primary">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card h-100 " style={{ height: "70vh" }}>
                <img
                  src="https://i.stack.imgur.com/qq8AE.gif"
                  data-src="https://res.cloudinary.com/elonatech/image/upload/v1709662750/careerPage/branding_cbu4tb.png"
                  className="lazyload"
                  alt=""
                  style={{
                    width: "20%",
                    borderRadius: "10%",
                    margin: "10px 20px"
                  }}
                />
                <div class="card-body">
                  <h5 class="card-title fs-5 fw-bold">
                    Marketing & Sales Representative
                  </h5>
                  <p class="card-text" style={{ fontWeight: "600" }}>
                    Previous work experience as a Marketer/Sales Representative,
                    Basic knowledge(MS Office/excel).
                  </p>
                  <Link to="/marketing-career" class="btn btn-primary">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================================================================================= */}
      <div className="container mt-5 mb-5">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-6">
            <div className="text-center">
              <img
                src="https://i.stack.imgur.com/qq8AE.gif"
                data-src="https://res.cloudinary.com/elonatech/image/upload/v1710841677/careerPage/jpeg-optimizer_black-_z3pvzk.jpg"
                alt=""
                className="img-fluid lazyload rounded mt-2"
                srcset=""
              />
            </div>
          </div>
          <div class="col-md-6">
            <h4 className="fw-bold">Our Passion</h4>
            <p className="text-justify ">
              We have a passion for our clients, results and the solutions we
              provide. Our team possess a pragmatic drive for action that runs
              through the week, each working day, and doesn’t let up. We rally
              clients with our infectious energy, to make change stick. And we
              never do it alone. We support and are supported to develop our own
              personal result(s) stories. We train, and get trained to further
              equip ourselves, so as to be abreast of imminent IT challenges. We
              work hard, but we don’t take ourselves too seriously. We enjoy
              what we do and we laugh a lot… most often at ourselves.
            </p>
            <h4 className="fw-bold ">Requirements</h4>
            <p className="fs-6 mb-1">
              Prospective candidates who wish to seek employment with us must
              fulfill the following:
            </p>
            <ul>
              <li>
                Must have successfully completed (minimum) of a diploma or
                relevant degree in a reputable higher institution
              </li>
              <li>
                Must have a relevant practical, IT skill or is undergoing a
                training in a recognized IT training institution
              </li>
              <li>Additional professional IT certification is a plus</li>
              <li>
                Must be a Nigerian or have the necessary work permits if not a
                Nigerian citizen
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
