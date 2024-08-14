import "./css/team.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - Tech Solution, Digital </title>
        <meta
          name="description"
          content=" 
       The Elonatech team consists of young, talented, educated, proud and highly motivated people that brings positive changes to our technological advancing world
       Leadership Team
       The Elonatech team consists of young, talented, educated, proud and highly motivated people that brings positive changes to our technological advancing world. Our people are passionate about technology, business, and customer relation
       "
        />
        <link rel="canonical" href="https://elonatech.com.ng/our-team" />
      </Helmet>

      {/*=========================================================== Header ===================================================*/}
      <div
        class="container-fluid  py-5 "
        style={{
          height: "500px",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1709812595/teamPage/Team_Work_ecfn7z.jpg)`,
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
      {/*================================================================= attribute ============================================*/}
      <div className="container mt-5">
        <p className="fs-1 fw-bolder" style={{ color: "#34548c" }}>
          Excellence at Work for Over a Decade
        </p>
        <div className="row">
          <div className="col-md-12">
            <p className="" style={{ textAlign: "justify" }}>
              Elonatech Nigeria Limited has been in operation for several years
              as a Computer and Allied products dealer/supplier until much
              recently in April 2010, where it commenced operations as a
              One-stop IT Solution Outfit.
              <br />
              <br />
              Our Company’s logistical services are designed for the
              top-of-the-market corporate clientele. We have continued to expand
              our range of services around the client: his problems, his needs,
              and his desires; we continue to innovate and sustain existing
              services while creating and maintaining new services to meet the
              needs of the increasingly sophisticated corporate clientele. and
              homes, as well as providing online consultation to client’s most
              pressing problems.
            </p>
          </div>
        </div>
      </div>
      {/*=========================================================== attribute  2 ================================================*/}
      <div className="container mt-5">
        <div className="row justify-content-md-center">
          <div className="col-6 col-md-2 mb-3 mt-4">
            <div className="text-center">
              <div className="brci mb-3">
                <h1 className="">F</h1>
              </div>
              <h5 className="fw-bolder">Flexible</h5>
            </div>
          </div>
          <div className="col-6 col-md-2 mt-4">
            <div className="text-center">
              <div className="brci mb-3">
                <h1 className="">O</h1>
              </div>
              <h5 className="fw-bolder">Optimistic</h5>
            </div>
          </div>
          <div className="col-6 col-md-2 mt-4">
            <div className="text-center">
              <div className="brci mb-3">
                <h1 className="">C</h1>
              </div>
              <h5 className="fw-bolder">Committed</h5>
            </div>
          </div>
          <div className="col-6 col-md-2 mt-4">
            <div className="text-center">
              <div className="brci mb-3">
                <h1 className="">U</h1>
              </div>
              <h5 className="fw-bolder">Unparalleled</h5>
            </div>
          </div>
          <div className="col-6 col-md-2 mt-4">
            <div className="text-center">
              <div className="brci mb-3">
                <h1 className="">S</h1>
              </div>
              <h5 className="fw-bolder">Sustainable</h5>
            </div>
          </div>
        </div>
      </div>
      {/*============================================================= worthy ===================================================*/}
      <div className="container mt-5">
        <div className="row g-5">
          <div className="col-md-6">
            <div className="">
              <p className="fs-3 fw-bold" style={{ color: "#34548c" }}>
                Team Members
              </p>
              <p className="" style={{ textAlign: "justify" }}>
                The Elonatech team consists of young, talented, educated, proud
                and highly motivated people that brings positive changes to our
                technological advancing world. Our people are passionate about
                technology, business, and customer relation. They strive for
                excellence and have the strongest belief in themselves and their
                potentials, which in turn brings about the desired result in the
                services rendered. When your mission is to be better and faster,
                you need the best people driving your vision. Those who can
                create focused marketing strategies that align with business
                goals, and infuse their creativity into groundbreaking
                campaigns.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <p className="fs-3 fw-bold text-end" style={{ color: "#34548c" }}>
                Our Passion
              </p>
              <p className="" style={{ textAlign: "justify" }}>
                We have a passion for our clients, results and the solutions we
                provide. Our team possess a pragmatic drive for action that runs
                through the week, each working day, and doesn’t let up. We rally
                clients with our infectious energy, to make change stick. And we
                never do it alone. We support and are supported to develop our
                own personal result(s) stories. We train, and get trained to
                further equip ourselves, so as to be abreast of imminent IT
                challenges. We work hard, but we don’t take ourselves too
                seriously. We enjoy what we do and we laugh a lot… most often at
                ourselves. It feels different to work with us.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ========================================================== team members ============================================== */}
      <div className="container mt-5 mb-5">
        <div
          class="text-center mx-auto mt-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ minWidth: "20px" }}
        >
          <p className="fw-bolder fs-1" style={{ color: "#34548c" }}>
            Leadership <span className="fst-italic  text-danger"> Team</span>
          </p>
          <p className="fs-4" style={{ color: "#34548c" }}>
            {" "}
            <span className="text-danger fw-bold">T</span>ogether{" "}
            <span className="text-danger fw-bold">E</span>veryone{" "}
            <span className="text-danger fw-bold">A</span>chieves{" "}
            <span className="text-danger fw-bold">M</span>ore
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3">
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
                      to={"https://www.instagram.com/israeloku"}
                    >
                      <i class="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row justify-content-center mt-5">
              <div className="col-md-3 team-margin-end">
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
                          to={"https://www.instagram.com/ray112ng"}
                        >
                          <i class="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="kontribusi">
                  <div class="team-item rounded overflow-hidden pb-4">
                    <Link className="text-decoration-none" to={"/violet-oku"}>
                      <img
                        class="img-fluid mb-4"
                        src="https://res.cloudinary.com/elonatech/image/upload/v1709808286/teamPage/Admin_-_Copy_ugao5i.png"
                        alt=""
                      />
                      <h4 className="fw-bold" style={{ color: "#34548c" }}>
                        Violet Laura O.
                      </h4>
                      <h6 class="text-danger">
                        Employee Relations/Admin Manager
                      </h6>
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
            </div>
          </div>
          <div className="col-md-12 ">
            <div className="row justify-content-center mt-5">
              <div className="col-md-3 team-margin-end">
                <div class="kontribusi">
                  <div class="team-item rounded overflow-hidden pb-4">
                    <Link
                      className="text-decoration-none"
                      to={"/samuel-folarin"}
                    >
                      <img
                        class="img-fluid mb-4"
                        src="https://res.cloudinary.com/elonatech/image/upload/v1709808295/teamPage/Sam_Folarin_k3nvhr.png"
                        alt=""
                      />
                      <h4 className="fw-bold" style={{ color: "#34548c" }}>
                        Samuel Folarin
                      </h4>
                      <h6 class="text-danger">
                        Team Lead | Graphics & UI/UX designer
                      </h6>
                    </Link>
                    <ul class="team-social">
                      <li>
                        <Link
                          class="btn btn-square"
                          target="_blank"
                          rel="noopener noreferrer"
                          to={
                            "https://www.linkedin.com/in/samuel-folarin-5637891b2"
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
                        <Link
                          class="btn btn-square"
                          target="_blank"
                          rel="noopener noreferrer"
                          to={""}
                        >
                          <i class="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          class="btn btn-square"
                          target="_blank"
                          rel="noopener noreferrer"
                          to={""}
                        >
                          <i class="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div class="kontribusi">
                  <div class="team-item rounded overflow-hidden pb-4">
                    <Link
                      className="text-decoration-none"
                      to={"/michael-jogoh"}
                    >
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
                          to={
                            "https://www.linkedin.com/in/michael-jogoh-257778222"
                          }
                        >
                          <i class="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li>
                        <Link class="btn btn-square">
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
                        <Link class="btn btn-square">
                          <i class="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link class="btn btn-square">
                          <i class="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-3 team-margin-end">
                <div class="kontribusi">
                  <div class="team-item rounded overflow-hidden pb-4">
                    <Link className="text-decoration-none" to={"/jamiu-noah"}>
                      <img
                        class="img-fluid mb-4"
                        src="https://res.cloudinary.com/elonatech/image/upload/v1709808291/teamPage/Jamiu_noah_ghhfjl.png"
                        alt=""
                      />
                      <h4 className="fw-bold" style={{ color: "#34548c" }}>
                        Jamiu Noah
                      </h4>
                      <h6 class="text-danger">Systems & Network Engineer</h6>
                    </Link>
                    <ul class="team-social">
                      <li>
                        <Link
                          class="btn btn-square"
                          target="_blank"
                          rel="noopener noreferrer"
                          to={"http://linkedin.com/in/jamiu-noah-5267b0242"}
                        >
                          <i class="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          class="btn btn-square"
                          target="_blank"
                          rel="noopener noreferrer"
                          to={""}
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
                        <Link class="btn btn-square">
                          <i class="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link class="btn btn-square">
                          <i class="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=============================================================================================================*/}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold" style={{ color: "#34548c" }}>
              Board of Directors
            </h2>
            <p>
              Elonatech Nigeria's board of directors play a critical role in the
              governing of the business. Its diversity lends important
              perspective and depth to the company's direction. We are therefore
              committed to building a board that is diverse in experience.
            </p>
            <p>
              Elonatech Nigeria has five (5) member of board of directors who
              are well equipped, educated, unswerving and experienced.
            </p>
            <p>
              Our directors are typical in their procedures, hence, Elonatech's
              strong driving force for decent and acceptable standards for her
              job of excellence.
            </p>
          </div>
          {/*  */}
          <div className="col-md-6 mb-5">
            <div className="text-center">
              <img
                src="https://i.stack.imgur.com/qq8AE.gif"
                data-src="https://res.cloudinary.com/elonatech/image/upload/v1709549735/teamPage/BOD_hlkh5z.jpg"
                className="img-fluid lazyload"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/*============================================================ end =================================================*/}
    </>
  );
};

export default Team;
