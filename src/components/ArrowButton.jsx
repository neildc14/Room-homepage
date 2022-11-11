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
      _active={{ background: "teal.500" }}
      onClick={carouselSlide}
    >
      {children}
    </Button>
  );
}

export default ArrowButton;
