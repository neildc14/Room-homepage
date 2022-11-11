import React from "react";
import About from "../About";
import ShopNow from "../ShopNow";
import Hero from "../HeroFeatures";

import { Box } from "@chakra-ui/react";

function Home() {
  return (
    <Box>
      <Hero />
      <ShopNow />
      <About />
    </Box>
  );
}

export default Home;
