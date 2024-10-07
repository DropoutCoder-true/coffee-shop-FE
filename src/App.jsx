import { Box, Container } from "@mui/material";
import Banner from "./components/Banner";
import CoffeeVariety from "./components/CoffeeVariety";
import {
  CoffeeCupIcon,
  ColdCoffeeCupIcon,
  DessertIcon,
  HotCoffeeCupIcon,
} from "./assets/images";
import SliderComponent from "./components/SliderComponent";
import { CoffeeSpecials } from "./assets/images";
import { DessertSpecials } from "./assets/images";

function App() {
  return (
    <Container maxWidth={false} disableGutters>
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
        maxWidth
        sx={{
          width: "100vw",
          height: "85vh",
          marginTop: "4rem",
        }}
      >
        <SliderComponent title="Our Special Coffees" data={CoffeeSpecials} />

        <SliderComponent title="Our Special Desserts" data={DessertSpecials} />
      </Box>
    </Container>
  );
}
export default App;
