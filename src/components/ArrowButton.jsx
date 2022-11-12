import React from "react";
import { Container, Box, Stack, Button, ButtonGroup } from "@chakra-ui/react";

function ArrowButton({ children, carouselSlide }) {
  return (
    <Button
      variant="none"
      aria-label="back button"
      height="100%"
      py={3}
      borderRadius="none"
      _active={{ background: "gray.600", transition: "all 0.3s ease-in" }}
      _hover={{ background: "gray.300", transition: "all 0.5s ease-in" }}
      onClick={carouselSlide}
    >
      {children}
    </Button>
  );
}

export default ArrowButton;
