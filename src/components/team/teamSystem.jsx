import { Link } from "react-router-dom";
import "./css/team.css";
import { Helmet } from "react-helmet-async";

const TeamSystem = () => {
  return (
    <>
      <Helmet>
        <title>Jamiu Noah - Tech Solution, Digital Solution</title>
        <meta
          name="description"
          content="    Noah, Jamiu I. is a proficient Project Manager, System Administrator and IT support Specialist with 6+ years hands-on experience 
                 in computer engineering across diverse industries. He is an Information Technology professional of which 3 years is hands-on Network support 
                 in the development practice with solid work exposure to best practices within the Manufacturing, Telecommunications, and IT sectors.
          "
        />
        <link rel="canonical" href="https://elonatech.com.ng/jamiu-noah" />
      </Helmet>

      <div
        class="container-fluid bg-dark py-5 "
        style={{
          height: "500px",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1709226487/teamPage/Team_Work_ea0uhv.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div class="py-5 mt-5 ">
          <h2 class=" mt-5 text-white text-center">Our Team</h2>
          <h5 class=" mt-4 text-white text-center">
            We Are Passionate About Technology, Business, And Customer Relation
          </h5>
          <p class="lead text-white text-center">
            The Elonatech team consists of young, talented, educated, proud and
            highly motivated people that brings positive changes to our
            technological advancing world
          </p>
        </div>
      </div>
      {/* =================================================================================== */}
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card border-0">
              <img
                src="https://res.cloudinary.com/elonatech/image/upload/v1709808291/teamPage/Jamiu_noah_ghhfjl.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card border-0">
              <h1 className="fw-bold" style={{ color: "#34548c" }}>
                Jamiu Noah
              </h1>
              <h6 className="text-danger mt-0">Systems & Network Engineer</h6>
              <p>
                Noah, Jamiu I. is a proficient Project Manager, System
                Administrator and IT support Specialist with 6+ years hands-on
                experience in computer engineering across diverse industries. He
                is an Information Technology professional of which 3 years is
                hands-on Network support in the development practice with solid
                work exposure to best practices within the Manufacturing,
                Telecommunications, and IT sectors.
              </p>
              <p>
                He specializes in developing and maintaining complex systems,
                troubleshooting issues, and overseeing system upgrades and
                maintenance. His technical expertise spans a wide range of
                system administration and IT support tasks, coupled with skills
                within the scope of risk management, cost control and
                contributing to successful project planning and implementation.
              </p>
              <p>
                Jamiu Noah is the Systems & Network Engineer of Elonatech
                Nigeria Limited and is Responsible for the design,
                implementation, and maintenance of systems and networks within
                the organization.
              </p>
              <p>
                Jamiu led a successful professional career prior to Elonatech.
                He successfully planned and implemented projects, demonstrating
                effective project management skills. With a strong background in
                computer engineering and handling operating systems and OEMs, He
                operates with the latest technologies and procedures. He was
                Tech tutor, Vsonet Group Limited, Ikeja; IT Maintenance
                Technician, Divine Grace Computers, Ikeja; Community service
                volunteer, Dorcas Eunice foundation, Ogba (where he was
                responsible for their Records Management System); coupled with
                an extensive experience in enterprise backup and recovery
                systems.
              </p>
              <p>
                He possesses a Higher National Diploma (HND) in Computer
                Engineering and a National Diploma in Computer Engineering as
                well, from Lagos State Polytechnic, Ikorodu. He is a Certified
                IT Support Specialist (System Administration and IT
                infrastructure), Certified Web Developer (authorized by IBM
                offered through Coursera), Certified Business Analytics with
                Excel, and a Certified Project Management Professional.
              </p>
              <p>
                He is diligent and competent in whatever Systems and Network
                tasks that comes his way and enjoys reading and researching.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================================================  */}
      <div class="container-fluid mt-5">
        <p className="fw-bold fs-1 text-center" style={{ color: "#34548c" }}>
          Leadership <span className="fst-italic  text-danger"> Team</span>
        </p>
        <div class="row mt-5   justify-content-md-center">
          <div class="col-lg-2 mx-1 p-3 mb-5  rounded">
            <div class="kontribusi">
              <div class="team-item rounded overflow-hidden pb-4">
                <Link
                  className="text-decoration-none"
                  to={"/israel-uhwonuwoma-o"}
                >
                  <img
                    class="img-fluid mb-4"
                    src="https://res.cloudinary.com/elonatech/image/upload/v1710243151/teamPage/chairman_esjmiy.jpg"
                    alt=""
                  />
                  <h4
                    className="fw-bold text-decoration-none"
                    style={{ color: "#34548c" }}
                  >
                    Dr. Israel Uwohnuwoma O.
                  </h4>
                  <h6 class="text-danger">Executive Chairman</h6>
                </Link>
                <ul class="team-social">
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://www.linkedin.com/in/israel-oku-65285969"}
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://twitter.com/OkuIsrael"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://www.facebook.com/uwoma.280247"}
                    >
                      <i class="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://www.instagram.com/israeloku/"}
                    >
                      <i class="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-2  mx-1  p-3 mb-5 rounded ">
            <div class="kontribusi">
              <div class="team-item rounded overflow-hidden pb-4">
                <Link className="text-decoration-none" to={"/oreva-p-oku"}>
                  <img
                    class="img-fluid mb-4"
                    src="https://res.cloudinary.com/elonatech/image/upload/v1709808299/teamPage/MD_mr_oreva_affjug.png"
                    alt=""
                  />
                  <h4 className="fw-bold" style={{ color: "#34548c" }}>
                    Oreva P. Oku
                  </h4>
                  <h6 class="text-danger">
                    MD, Lead Consultant & Creative Director
                  </h6>
                </Link>
                <ul class="team-social">
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://www.linkedin.com/in/oreva-oku-b730811b/"}
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://twitter.com/ray112ng"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://www.facebook.com/oreva.oku"}
                    >
                      <i class="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={" https://www.instagram.com/ray112ng"}
                    >
                      <i class="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-2 mx-1  p-3 mb-5 rounded ">
            <div class="kontribusi">
              <div class="team-item rounded overflow-hidden pb-4">
                <Link className="text-decoration-none" to={"/violet-oku"}>
                  <img
                    class="img-fluid mb-4"
                    src="https://res.cloudinary.com/elonatech/image/upload/v1723795656/Admin__3_uuxdh0.jpg"
                    alt=""
                  />
                  <h4 className="fw-bold" style={{ color: "#34548c" }}>
                    Violet Laura O.
                  </h4>
                  <h6 class="text-danger">Employee Relations/Admin Manager</h6>
                </Link>
                <ul class="team-social">
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://www.linkedin.com/in/laura-oku-a0597b17b"}
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://twitter.com/V4reva"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://www.facebook.com/violetoku"}
                    >
                      <i class="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://www.instagram.com/vioreva"}
                    >
                      <i class="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-2  mx-1 p-3 mb-5 rounded">
            <div class="kontribusi">
              <div class="team-item rounded overflow-hidden pb-4">
                <Link className="text-decoration-none" to={"/samuel-folarin"}>
                  <img
                    class="img-fluid mb-4"
                    src="https://res.cloudinary.com/elonatech/image/upload/v1709808295/teamPage/Sam_Folarin_k3nvhr.png"
                    alt=""
                  />
                  <h4 className="fw-bold" style={{ color: "#34548c" }}>
                    Samuel Folarin
                  </h4>
                  <h6 class="text-danger">Team Lead | Graphics designer</h6>
                </Link>
                <ul class="team-social">
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={
                        "https://www.linkedin.com/in/samuel-folarin-5637891b2/"
                      }
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://twitter.com/sammycrest"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <div
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={""}
                    >
                      <i class="fab fa-facebook-f"></i>
                    </div>
                  </li>
                  <li>
                    <div
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={""}
                    >
                      <i class="fab fa-instagram"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-2 mx-1 p-3 mb-5 rounded">
            <div class="kontribusi">
              <div class="team-item rounded overflow-hidden pb-4">
                <Link className="text-decoration-none" to={"/michael-jogoh"}>
                  <img
                    class="img-fluid mb-4"
                    src="https://res.cloudinary.com/elonatech/image/upload/v1709808281/teamPage/Mike_jogoh_hq9hsl.png"
                    alt=""
                  />
                  <h5 className="fw-bold" style={{ color: "#34548c" }}>
                    Michael Jogoh
                  </h5>
                  <h6 class="text-danger">Lead Web Developer</h6>
                </Link>
                <ul class="team-social">
                  <li>
                    <Link
                      class="btn btn-square"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={"https://www.linkedin.com/in/michael-jogoh-257778222"}
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <div class="btn btn-square">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </div>
                  </li>
                  <li>
                    <div class="btn btn-square">
                      <i class="fab fa-facebook-f"></i>
                    </div>
                  </li>
                  <li>
                    <div class="btn btn-square">
                      <i class="fab fa-instagram"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =================================================================================== */}
      <div className="text-center mb-5">
        <Link to={"/our-team"} className="btn btn-danger">
          Back to our team
        </Link>
      </div>
      {/* =================================================================================== */}
    </>
  );
};

export default TeamSystem;
