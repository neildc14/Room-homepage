import React from "react";
import { Stack, Link, Center } from "@chakra-ui/react";

function Nav() {
  return (
    <Stack
      as="nav"
      direction="row"
      spacing={8}
      color="white"
      sx={{ transition: "all .7s ease-in-out" }}
    >
      <Link>Home</Link>
      <Link>Shope</Link>
      <Link>About</Link>
      <Link>Contact</Link>
    </Stack>
  );
}

export default Nav;
