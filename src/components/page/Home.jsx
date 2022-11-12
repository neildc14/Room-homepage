import React from "react";
import About from "../About";
import ShopNow from "../ShopNow";
import Hero from "../HeroFeatures";

import { Box, SimpleGrid } from "@chakra-ui/react";

function Home() {
  return (
    <Box>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }}>
        <Hero />
        <ShopNow />
      </SimpleGrid>
      <About />
    </Box>
  );
}

export default Home;
