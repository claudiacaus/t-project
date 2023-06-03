import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { BsTwitter } from "react-icons/bs";

export const SidebarLogo = () => {
  return (
    <Link href="/">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="50%"
        w="50px"
        h="50px"
        _hover={{ cursor: "pointer", bg: "gray.800" }}
      >
        <BsTwitter size="28px" color="hansblue !important" />
      </Box>
    </Link>
  );
};
