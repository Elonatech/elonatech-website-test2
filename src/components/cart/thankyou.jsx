import "./thankyou.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <>
      <Helmet>
        <title>Thank You - Tech Solution, Digital Solution</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* ====================================================================================================== */}
      <div
        class="container-fluid  py-5 "
        style={{
          height: "500px",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/elonatech/image/upload/v1712150344/checkoutPage/thank_you_for_shoppin_gkwbcg.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div class="py-5 mt-5 ">
          <h2 class=" mt-5 text-white text-center">
            You order was successfuly completed
          </h2>
          <h5 class=" mt-4 text-white text-center"></h5>
          <p class="lead text-white text-center"></p>
        </div>
      </div>
      {/* ===================================================================== */}
      <div class="untree_co-section" style={{ background: "#eff2f1" }}>
        <div class="container py-5">
          <div class="row">
            <div class="col-md-12 text-center pt-5">
              <span class="display-3 thankyou-icon text-dark">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-cart-check mb-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 5.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708 0z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                  />
                </svg>
              </span>
              <h2 class="display-3 text-dark fw-bold">Thank you!</h2>
              <h5 class=" mb-5">You order was successfuly completed.</h5>
              <Link to={"/shop"} class="cart-btn">
                Back to shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thankyou;
