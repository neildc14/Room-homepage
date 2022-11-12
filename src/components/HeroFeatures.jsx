import React from "react";
import Header from "./layouts/Header";
import ArrowButton from "./ArrowButton";

//redux
import { useSelector, useDispatch } from "react-redux";
import { forward, backward } from "../redux/features/imageIndexSlice";

//chakra
import { Container, Box, ButtonGroup } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

//assets
import HeroImage1 from "../assets/images/desktop-image-hero-1.jpg";
import HeroImage2 from "../assets/images/mobile-image-hero-2.jpg";
import HeroImage3 from "../assets/images/mobile-image-hero-3.jpg";

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
          position: "relative",
          backgroundImage: `url(${carouselImages[index]})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          transition: "all 0.5s ease-in-out",
        }}
      >
        <Container sx={{ height: "100%" }}>
          <Header />
        </Container>
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
              _active={{ color: "black" }}
              _hover={{ color: "black" }}
            />
          </ArrowButton>
          <ArrowButton carouselSlide={forwardFunc}>
            <ChevronRightIcon
              color="white"
              w={12}
              h={14}
              _active={{ color: "black" }}
              _hover={{ color: "black" }}
            />
          </ArrowButton>
        </ButtonGroup>
      </Box>
    </React.Fragment>
  );
}

export default Hero;
