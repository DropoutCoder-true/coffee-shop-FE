import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { LeftSideImage } from "../assets/images";
import { RightSideImage } from "../assets/images";

const ExploreProducts = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ height: "40vh" }}>
        <img
          src={LeftSideImage}
          alt="left-side-image"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">Check our best</Typography>
        <Typography variant="h3">coffee beatens</Typography>
        <Button
          sx={{
            backgroundColor: "#2c2421",
            height: "5vh",
            width: "20vw",
            color: "white",
            borderRadius: "20px",
            marginTop: "2rem",
          }}
        >
          Explore our Products
        </Button>
      </Box>
      <Box sx={{ height: "40vh" }}>
        <img
          src={RightSideImage}
          alt="right-side-image"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default ExploreProducts;
