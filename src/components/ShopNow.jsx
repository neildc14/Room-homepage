import React from "react";
import { Container, Box, Button, Heading, Text } from "@chakra-ui/react";
import LongArrowIcon from "./LongArrowIcon";

function ShopNow() {
  return (
    <Container>
      <Box mt={12} px={4}>
        <Heading as="h1" size="2xl">
          Discover innovative ways to decorate
        </Heading>
        <Text fontSize="lg" mt={6} color="brand.dark_grey">
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </Text>

        <Button
          variant="ghost"
          ps={0}
          mt={{ base: 10, lg: 6 }}
          sx={{
            paddingRight: "40px",
            letterSpacing: "12px",
            fontWeight: 700,
          }}
          rightIcon={<LongArrowIcon />}
        >
          SHOP NOW
        </Button>
      </Box>
    </Container>
  );
}

export default ShopNow;
