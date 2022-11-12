import React from "react";
import { Box, Stack, useMediaQuery } from "@chakra-ui/react";
import MobileNav from "../MobileNav";
import DesktopNav from "../DesktopNav";

function Header() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Box as="header" pt={5}>
      {isLargerThan800 ? <DesktopNav /> : <MobileNav />}
    </Box>
  );
}

export default Header;
