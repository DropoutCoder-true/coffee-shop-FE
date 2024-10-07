import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Typography } from "@mui/material";

const SliderComponent = ({ title, data }) => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{ marginLeft: "40vw", marginBottom: "3rem" }}
      >
        {title}
      </Typography>
      <Swiper
        style={{ width: "100%", height: "60%", marginBottom: "5rem" }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={2}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <img
              src={item.img}
              alt={item.name}
              style={{
                objectFit: "contain",
                height: "70%",
                width: "100%",
              }}
            />
            <div
              style={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="h4">{item.name}</Typography>
              <Typography variant="h6">{item.desc}</Typography>
              <Typography variant="h6">Price: ${item.price}</Typography>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderComponent;
