import { Container } from "@mui/material";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <Container maxWidth={false} disableGutters>
        <Banner />
      </Container>
    </>
  );
}
export default App;
