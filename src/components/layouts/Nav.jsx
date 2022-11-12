import React from "react";
import { Stack, Link } from "@chakra-ui/react";

function Nav() {
  return (
    <Stack as="nav" direction="row" spacing={8} color="white">
      <Link>Home</Link>
      <Link>Shop</Link>
      <Link>About</Link>
      <Link>Contact</Link>
    </Stack>
  );
}

export default Nav;
