import React from "react";
import Header from "./layouts/Header";

import { useSelector, useDispatch } from "react-redux";
import { forward, backward } from "../redux/features/imageIndexSlice";

//chakra
import { Container, Box, ButtonGroup } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import HeroImage1 from "../assets/images/desktop-image-hero-1.jpg";
import HeroImage2 from "../assets/images/mobile-image-hero-2.jpg";
import HeroImage3 from "../assets/images/mobile-image-hero-3.jpg";
import ArrowButton from "./ArrowButton";

function Hero() {
  const carouselImages = [`${HeroImage1}`, `${HeroImage2}`, `${HeroImage3}`];
  const index = useSelector((state) => state.imageIndex.index);
  const dispatch = useDispatch();

  const forwardFunc = () => {
    dispatch(forward());
  };

  const backwardFunc = () => {
    dispatch(backward());
  };

  return (
    <React.Fragment>
      <Box
        height="60vh"
        w={"100%"}
        sx={{
          backgroundImage: `url(${carouselImages[index]})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Container sx={{ height: "100%", position: "relative" }}>
          <Header />
          <ButtonGroup
            bg="black"
            display="inline-block"
            sx={{ position: "absolute", bottom: 0, right: 0 }}
          >
            <ArrowButton carouselSlide={backwardFunc}>
              <ChevronLeftIcon
                color="white"
                w={12}
                h={14}
                _hover={{
                  color: "teal.300",
                }}
                _active={{ color: "black" }}
              />
            </ArrowButton>
            <ArrowButton carouselSlide={forwardFunc}>
              <ChevronRightIcon
                color="white"
                w={12}
                h={14}
                _hover={{
                  color: "teal.300",
                }}
                _active={{ color: "black" }}
              />
            </ArrowButton>
          </ButtonGroup>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default Hero;
