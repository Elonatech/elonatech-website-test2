import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div
        class="container-fluid bg-dark py-5 "
        style={{
          height: "500px",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url()`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div class="py-5 mt-5 "></div>
      </div>

      <main class="container py-5 my-5 mb-5" style={{ marginBottom: "" }}>
        <h1 className="mt-5 fw-bold">Admin Dashboard</h1>
        <p>Welcome to Elonatech website dashboard</p>
        <hr class="my-5" />

        <div class="row" data-masonry='{"percentPosition": true }'>
          <div class="col-sm-6 col-lg-4 mb-4" style={{ cursor: "pointer" }}>
            <Link to={"/write"} className="text-decoration-none">
              <div class="card text-bg-danger text-center p-3">
                <figure class="mb-0 text-decoration-none">
                  <blockquote class="blockquote">
                    <h4>Blog</h4>
                  </blockquote>
                </figure>
              </div>
            </Link>
          </div>

          <div class="col-sm-6 col-lg-4 mb-4" style={{ cursor: "pointer" }}>
            <Link to={"/computer-write"} className="text-decoration-none">
              <div class="card text-bg-success text-center  p-3">
                <figure class="p-3 mb-0">
                  <blockquote class="blockquote">
                    <h4>Computer</h4>
                  </blockquote>
                </figure>
              </div>
            </Link>
          </div>
          <div class="col-sm-6 col-lg-4 mb-5" style={{ cursor: "pointer" }}>
            <Link to={"/shop-write"} className="text-decoration-none">
              <div class="card text-bg-primary text-center p-3">
                <figure class="mb-0">
                  <blockquote class="blockquote">
                    <h4 className="text-white">Shop</h4>
                  </blockquote>
                </figure>
              </div>
            </Link>
          </div>
          <div class="col-sm-6 col-lg-4 mb-4" style={{ cursor: "pointer" }}>
            <Link className="text-decoration-none">
              <div class="card text-bg-primary text-center p-3">
                <figure class="mb-0">
                  <blockquote class="blockquote">
                    <p>
                      A well-known quote, contained in a blockquote element.
                    </p>
                  </blockquote>
                  <figcaption class="blockquote-footer mb-0 text-white">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </figcaption>
                </figure>
              </div>
            </Link>
          </div>
          <div class="col-sm-6 col-lg-4 mb-4" style={{ cursor: "pointer" }}>
            <Link className="text-decoration-none">
              <div class="card text-bg-secondary text-center">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This card has a regular title and short paragraph of text
                    below it.
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-sm-6 col-lg-4 mb-4" style={{ cursor: "pointer" }}>
            <Link className="text-decoration-none">
              <div class="card text-bg-primary text-center p-3">
                <figure class="mb-0">
                  <blockquote class="blockquote">
                    <p>
                      A well-known quote, contained in a blockquote element.
                    </p>
                  </blockquote>
                  <figcaption class="blockquote-footer mb-0 text-white">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </figcaption>
                </figure>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
