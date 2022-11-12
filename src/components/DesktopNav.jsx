import React from "react";
import Nav from "./layouts/Nav";
import { Box, Flex, Spacer, Center } from "@chakra-ui/react";
import Logo from "./Logo";

function DesktopNav() {
  return (
    <Flex>
      <Center>
        <Logo />
      </Center>
      <Spacer />
      <Box>
        <Center>
          <Nav />
        </Center>
      </Box>
      <Spacer />
    </Flex>
  );
}

export default DesktopNav;
