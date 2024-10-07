import { Box, Container, Typography } from "@mui/material";
import React from "react";

const CoffeeVarieties = ({ iconUrl, title }) => {
  return (
    <Container
      disableGutters
      sx={{
        marginTop: "3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3rem",
      }}
    >
      <Box
        component={"img"}
        sx={{ height: 100, width: 100, color: "#673e0f" }}
        alt={title}
        src={iconUrl}
      />
      <Typography variant="h6" fontSize={20}>
        {title}
      </Typography>
    </Container>
  );
};

export default CoffeeVarieties;
