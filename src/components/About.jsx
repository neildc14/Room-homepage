import React from "react";
import {
  Container,
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  AspectRatio,
} from "@chakra-ui/react";

//assets
import ImageAboutDark from "../assets/images/image-about-dark.jpg";
import ImageAboutLight from "../assets/images/image-about-light.jpg";

function About() {
  return (
    <Box mt={{ sm: 12, lg: 0 }}>
      <SimpleGrid columns={{ lg: 3 }}>
        <AspectRatio ratio={16 / 10}>
          <Image src={ImageAboutDark} aria-label="About image" mx={0} />
        </AspectRatio>
        <Container mt={{ base: 12, lg: 10 }}>
          <Box px={4}>
            <Heading
              as="h2"
              height="100%"
              fontSize={{ base: "lg", lg: "md" }}
              textAlign={{ md: "center", lg: "left" }}
              sx={{ letterSpacing: "7px", fontWeight: 600 }}
            >
              ABOUT OUR FURNITURE
            </Heading>
            <Text
              height="100%"
              fontSize={{ base: "lg", lg: "md" }}
              mt={6}
              color="brand.dark_grey"
              textAlign={{ md: "center", lg: "left" }}
            >
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </Text>
          </Box>
        </Container>
        <AspectRatio ratio={16 / 10}>
          <Image
            height="100%"
            mt={{ base: 10, lg: 0 }}
            src={ImageAboutLight}
            aria-label="About image"
            mx={0}
          />
        </AspectRatio>
      </SimpleGrid>
    </Box>
  );
}

export default About;
