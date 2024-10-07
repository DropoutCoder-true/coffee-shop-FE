import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "../assets/images/Americano-coffee.jpg";
import Image2 from "../assets/images/black-coffee.jpg";
import Image3 from "../assets/images/cappuccino-coffee.jpg";
import Image4 from "../assets/images/Cortado-coffee.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Typography } from "@mui/material";

const SliderComponent = ({ data }) => {
  return (
    <>
      <Swiper
        style={{ width: "100%", height: "60%" }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={2}
        autoplay
        slidesPerView={4}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <img
              src={item.img}
              alt={item.name}
              style={{ objectFit: "contain", height: "80%", width: "100%" }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4">{item.name}</Typography>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderComponent;
