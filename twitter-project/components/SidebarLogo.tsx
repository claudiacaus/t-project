import Image from "next/image";
import { Box } from "@chakra-ui/react";

export const SidebarLogo = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" h="100px">
      <Image src="/public/logo.svg" alt="Logo" />
    </Box>
  );
};
