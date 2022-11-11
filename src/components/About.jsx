import React from "react";
import { Container, Box, Heading, Text, Image } from "@chakra-ui/react";
import ImageAboutDark from "../assets/images/image-about-dark.jpg";
import ImageAboutLight from "../assets/images/image-about-light.jpg";

function About() {
  return (
    <Box mt={12}>
      <Image
        src={ImageAboutDark}
        aria-label="About image"
        mx={0}
        width="100%"
      />
      <Container mt={12}>
        <Box px={4}>
          <Heading
            as="h2"
            fontSize="lg"
            sx={{ letterSpacing: "7px", fontWeight: 600 }}
          >
            ABOUT OUR FURNITURE
          </Heading>
          <Text fontSize="lg" mt={6} color="brand.dark_grey">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </Text>
        </Box>
      </Container>
      <Image
        mt={10}
        src={ImageAboutLight}
        aria-label="About image"
        mx={0}
        width="100%"
      />
    </Box>
  );
}

export default About;
