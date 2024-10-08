import { Box, Container } from "@mui/material";
import Banner from "./components/Banner";
import CoffeeVariety from "./components/CoffeeVariety";
import {
  CoffeeCupIcon,
  ColdCoffeeCupIcon,
  DessertIcon,
  HotCoffeeCupIcon,
  LeftCoffeeBorder,
  RightCoffeeBorder,
} from "./assets/images";
import SliderComponent from "./components/SliderComponent";
import { CoffeeSpecials } from "./assets/images";
import { DessertSpecials } from "./assets/images";
import ExploreProducts from "./components/ExploreProducts";
import CustomerFeedback from "./components/CustomerFeedback";

function App() {
  return (
    <Box
      style={{
        backgroundColor: "#e2d9c8",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{ padding: "5rem 5rem 5rem 5rem" }}
      >
        <Banner />
        <Box
          maxWidth={false}
          sx={{
            display: "flex",
            gap: "15rem",
            marginLeft: "25vw",
            alignItems: "center",
          }}
        >
          <CoffeeVariety iconUrl={HotCoffeeCupIcon} title="Hot Coffee" />
          <CoffeeVariety iconUrl={ColdCoffeeCupIcon} title="Cold Coffee" />
          <CoffeeVariety iconUrl={CoffeeCupIcon} title="Cup Coffee" />
          <CoffeeVariety iconUrl={DessertIcon} title="Deserts" />
        </Box>

        {/* Slider Section */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            marginTop: "4rem",
            paddingTop: "3rem",
            paddingBottom: "3rem",
            backgroundColor: "white",
          }}
        >
          <SliderComponent title="Our Special Coffees" data={CoffeeSpecials} />
          <SliderComponent
            title="Our Special Desserts"
            data={DessertSpecials}
          />
        </Box>

        {/* Customer Feedback */}
        <ExploreProducts />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "white",
          }}
        >
          <img
            src={RightCoffeeBorder}
            alt="left-side-border"
            style={{ height: "100%", width: "30%" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomerFeedback />
          </Box>
          <img
            src={LeftCoffeeBorder}
            alt="left-side-border"
            style={{ height: "100%", width: "30%" }}
          />
        </Box>
      </Container>
    </Box>
  );
}
export default App;
