import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Typography variant="h4">COFFEE</Typography>

      {/* Section 1 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Typography variant="h4">Privacy</Typography>
        <Typography variant="caption">Terms of use</Typography>
        <Typography variant="caption">Privacy Policy</Typography>
        <Typography variant="caption">Rules</Typography>
      </Box>

      {/* Section 2 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Typography variant="h4">Services</Typography>
        <Typography variant="caption">Shop</Typography>
        <Typography variant="caption">Order Online</Typography>
        <Typography variant="caption">Menu</Typography>
      </Box>

      {/* Section 3 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Typography variant="h4">About US</Typography>
        <Typography variant="caption">Fix an appointment</Typography>
        <Typography variant="caption">About us</Typography>
        <Typography variant="caption">Our Story</Typography>
      </Box>

      {/* Section 4 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Typography variant="h4">Information</Typography>
        <Typography variant="caption">How is pricing?</Typography>
        <Typography variant="caption">Sell your products</Typography>
        <Typography variant="caption">Info</Typography>
      </Box>
    </>
  );
};

export default Footer;
