import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import MobileNav from "../MobileNav";

function Header() {
  return (
    <Box as="header" pt={5}>
      <MobileNav />
    </Box>
  );
}

export default Header;
