import Navbar from "../navbar/navbar";
import "./error.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Error = () => {
  
 
  return (
    <>
      <Navbar />
      <Helmet>
        <title>Page Not Found</title>
        <meta
          name="description"
          content="Our Technical Support Team
          is composed of individuals that are familiar with the ins and outs of the device they are assigned to. They offer user-friendly assistance for individuals having technical problems with computer/electronic devices. With this knowledge, they are able to troubleshoot most problems that a user experiences. Technical support may be provided over the phone, through email, a live-chat interface or with a remote support solution."
        />
        <link
          rel="canonical"
          href="https://elonatech.com.ng/technical-support"
        />
      </Helmet>

      {/*======================================================== header ==============================================*/}
      <div
        class="container-fluid  py-5 "
        style={{
          minHeight: "500px",
          marginBottom: "50px",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1709812685/techSupportPage/tech_support_header_m69n74.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div class="py-5 mt-5 ">
          <h1 class=" mt-5 text-white text-center">Page not found!!!</h1>
        </div>
      </div>

      <div className="container d-flex justify-content-center align-items-center">
        <div className="row text-center">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h1
              className="display-1 fw-bold"
              style={{ fontSize: "10rem", fontWeight: "900" }}
            >
              404
            </h1>
            <p
              className="text-uppercase"
              style={{
                color: "#f56a07",
                fontWeight: "bold",
                letterSpacing: "2px"
              }}
            >
              Sorry, <span className="text-muted">the page not found</span>
            </p>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search Products..."
                aria-label="Product search"
              />
            </div>
            <button type="button" className="btn btn-danger btn-lg mb-4">
              GO
            </button>
            <div className="d-flex justify-content-center gap-2">
              
                <Link to={-1} class="btn btn-danger py-2 px-5">
              Previous Page
                </Link>
         
              
               <Link to={"/"} class="btn btn-danger  py-2 px-5">Go Home</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;



      


