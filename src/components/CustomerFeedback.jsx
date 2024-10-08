import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import { CustomerData } from "../assets/images";
import { EffectCards } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";

const CustomerFeedback = () => {
  return (
    <>
      <Typography variant="h5">Come and Join</Typography>
      <Typography variant="h3">Our Happy Customers</Typography>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Autoplay]}
        className="mySwiper"
        style={{ width: "350px", height: "350px", marginTop: "2rem" }}
      >
        {CustomerData.map((item, i) => (
          <SwiperSlide
            style={{
              backgroundColor: "white",
              justifyContent: "center",
              border: "3px solid #2c2421",
              borderRadius: "20px",
            }}
            key={i}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                padding: "1rem 1rem 1rem 1rem",
                alignItems: "center",
              }}
            >
              <Avatar alt={item.name} src={item.imgUrl} />
              <Box sx={{ justifySelf: "self-start" }}>
                <Typography variant="h5">{item.name}</Typography>
                <Typography variant="caption">{item.profession}</Typography>
              </Box>
              <Rating
                name="half-rating-read"
                defaultValue={item.rating}
                precision={0.5}
                readOnly
              />
            </Box>
            <Divider />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "1rem",
                height: "70%",
                width: "100%",
                backgroundColor: "#e2d9c8",
              }}
            >
              <Typography variant="h5">{item.desc}</Typography>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CustomerFeedback;
