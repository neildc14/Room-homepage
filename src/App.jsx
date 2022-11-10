import Header from "./components/layouts/Header";
import Home from "./components/page/Home";

import { Container, Box } from "@chakra-ui/react";

import HeroImage1 from "./assets/images/mobile-image-hero-1.jpg";
import HeroImage2 from "./assets/images/mobile-image-hero-2.jpg";
import HeroImage3 from "./assets/images/mobile-image-hero-3.jpg";

function App() {
  return (
    <div className="App">
      <Box
        height="50vh"
        w={"100%"}
        sx={{
          backgroundImage: `url(${HeroImage1})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Header />
          <Home />
          
        </Container>
      </Box>
    </div>
  );
}

export default App;
