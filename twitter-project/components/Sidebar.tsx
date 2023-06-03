import { Box, VStack } from "@chakra-ui/react";

interface SidebarProps {}

export const Sidebar = () => {
  const items = [
    {
      label: "Home",
      href: "/",
      icon: "/public/icons/home.svg",
    },
    {
      label: "Profile",
      href: "/users/1",
      icon: "/public/icons/profile.svg",
    },
    {
      label: "notifications",
      href: "/notifications",
      icon: "/public/icons/notifications.svg",
    },
  ];

  return (
    <Box w={{ lg: "230px" }}>
      <Box display="flex" flexDirection="column" alignItems="end">
        <VStack spacing="2" h="full" pr={{ base: "4", md: "6" }}>
          {/* Your content goes here */}
        </VStack>
      </Box>
    </Box>
  );
};
