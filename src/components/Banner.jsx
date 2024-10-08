import React from "react";
import Navbar from "./Navbar";
import coverImage from "../assets/images/banner-image-cropped.jpg";
import { Box, Button, Container, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundImage: `url(${coverImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingTop: "1rem",
        width: "100%",
        height: "70vh",
      }}
    >
      <Navbar />
      <Box
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: "18rem",
          marginTop: "8rem",
          gap: "1rem",
        }}
      >
        <Typography color="white">Welcome</Typography>
        <Typography color="white" variant="h3">
          We serve the richest coffee,
          <br />
          in the city!
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            width: "20%",
            borderRadius: "20px",
            backgroundColor: "#2c2421",
          }}
        >
          Order Now!
        </Button>
      </Box>
    </Container>
  );
};

export default Banner;
