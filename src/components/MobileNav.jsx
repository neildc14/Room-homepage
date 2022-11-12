import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setToggle } from "../redux/features/navToggleSlice";
import { Box, Flex, Spacer, Center } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Nav from "./layouts/Nav";
import Logo from "./Logo";

function MobileNav() {
  const toggle = useSelector((state) => state.navToggle.toggle);
  const dispatch = useDispatch();

  return (
    <Flex>
      <HamburgerIcon
        sx={{ w: 9, h: 9, color: "white", transition: "all 0.5s ease-in-out" }}
        _active={{
          border: "1px",
          borderColor: "gray.200",
          borderRadius: "md",
        }}
        onClick={() => dispatch(setToggle(!toggle))}
      />
      {toggle && <Spacer />}
      {toggle ? (
        <Box sx={{ transition: "all 0.5s ease-in-out" }}>
          <Center>
            <Nav />
          </Center>
        </Box>
      ) : (
        <Flex justifyContent="center" alignItems="center" w="100%">
          <Box mx="auto" sx={{ transition: "all 0.5s ease-in-out" }}>
            <Logo />
          </Box>
        </Flex>
      )}
    </Flex>
  );
}

export default MobileNav;
