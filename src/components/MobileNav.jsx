import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setToggle } from "../redux/features/navToggleSlice";
import { Box, Flex, Spacer, Slide, Container, Center } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Nav from "./layouts/Nav";
import Logo from "./Logo";

function MobileNav() {
  const toggle = useSelector((state) => state.navToggle.toggle);
  const dispatch = useDispatch();

  return (
    <Flex>
      <HamburgerIcon
        w={9}
        h={9}
        color="white"
        onClick={() => dispatch(setToggle(!toggle))}
      />
      {toggle && <Spacer />}
      {toggle ? (
        <Box>
          <Center>
            <Nav />
          </Center>
        </Box>
      ) : (
        <Flex justifyContent="center" alignItems="center" w="100%">
          <Box mx="auto">
            <Logo />
          </Box>
        </Flex>
      )}
    </Flex>
  );
}

export default MobileNav;
