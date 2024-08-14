import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from "swiper/modules";
import { Link } from "react-router-dom";

// images

import Digital from "./caption/Digital_marketers_zreuxb.jpg";
import Consult from "./caption/IT_consultants_ah07ai.jpg";
import Tech from "./caption/tech_support_jijajw.jpg";
import Web from "./caption/web_developers_sbyfha.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./carousel.css";

const swiperParams = {
  noSwiping: true, // Disable swiping for all slides
  noSwipingClass: "swiper-no-swiping"
};

const Carousel = () => {
  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };

  return (
    <>
      <div className="" style={{ background: "#f8f8f8" }}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          pagination={true}
          autoplay={{ delay: 5000 }}
          {...swiperParams}
          {...params}
          loop={true}
        >
          <div
            className="swiper-button-next"
            style={{
              color: "#fff",
              fontSize: "18px",
              margin: "0 0px",
              cursor: "pointer",
              float: "right"
            }}
          ></div>
          <div
            className="swiper-button-prev"
            style={{
              color: "#fff",
              fontSize: "18px",
              margin: "0 0px",
              cursor: "pointer",
              float: "left"
            }}
          ></div>

          <SwiperSlide className="swiper-slide swiper-no-swiping bg-secondary">
            <div
              className="carouselCard"
              style={{ backgroundImage: `url(${Consult})` }}
            >
              <div class="carouselCardPadding">
                <div class=" text-start carouselText">
                  <h1 className="mb-3">We are IT Consultants</h1>
                  <h5 className="mb-4">
                    Information technology consulting services help improve the
                    performance, scalability <br /> and competitiveness of your
                    company through right technology enablement and usage{" "}
                  </h5>
                  <Link to={"/consulting"} className="btn btn-lg btn-danger">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide bg-secondary">
            <div
              className="carouselCard"
              style={{ backgroundImage: `url(${Digital})` }}
            >
              <div class="carouselCardPadding">
                <div class=" text-start carouselText">
                  <h1 className="mb-3">We are Digital Marketers</h1>
                  <h5 className="mb-4">
                    Experts in providing digital marketing strategies that
                    convert engagement{" "}
                  </h5>
                  <Link
                    to={"/digital-marketing"}
                    className="btn btn-lg btn-danger"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide swiper-no-swiping bg-secondary">
            <div
              className="carouselCard"
              style={{ backgroundImage: `url(${Web})` }}
            >
              <div class="carouselCardPadding">
                <div class="text-start carouselText">
                  <h1 className="mb-3">We are Web Developers</h1>
                  <h5 className="mb-4">
                    We offer bespoke user experience, web design, app design,
                    and software development services
                  </h5>
                  <Link to={"/web-design"} className="btn btn-lg btn-danger">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide swiper-no-swiping bg-secondary">
            <div
              className="carouselCard"
              style={{ backgroundImage: `url(${Tech})` }}
            >
              <div class="carouselCardPadding">
                <div class=" text-start carouselText">
                  <h1 className="mb-3">We are Tech Support Engineers</h1>
                  <h5 className="mb-4">
                    We implement and design both complex and simple data/voice
                    networks and maintenance of all types of computer systems
                  </h5>
                  <Link
                    to={"/hardware-engineering"}
                    className="btn btn-lg btn-danger"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
