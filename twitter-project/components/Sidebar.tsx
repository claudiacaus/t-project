import { Text, Flex } from "@chakra-ui/react";
import { SidebarLogo } from "./SidebarLogo";
import Link from "next/link";
import Image from "next/image";
import Home from "@/public/images/svg/home.svg";
import Notification from "@/public/images/svg/notification.svg";
import Profile from "@/public/images/svg/profile.svg";
import { useRouter } from "next/router";

interface SidebarProps {}

export const Sidebar = () => {
  const router = useRouter();

  const items = [
    {
      label: "Home",
      href: "/",
      icon: Home,
    },

    {
      label: "Notifications",
      href: "/notifications",
      icon: Notification,
    },
    {
      label: "Profile",
      href: "/users/1",
      icon: Profile,
    },
  ];

  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column" justifyContent="flex-start" gap={2}>
        <SidebarLogo />
        {items.map((item) => (
          <Link href={item.href} key={item.label}>
            <Flex
              flexDir="row"
              justifyContent="start"
              borderRadius="60px"
              px="15px"
              py="6px"
              width="max-content"
              _hover={{
                cursor: "pointer",
                bg: "gray.800",
                bgColor: "gray.800",
              }}
            >
              <Image src={item.icon} alt={item.label} />
              <Text
                fontWeight={router.pathname === item.href ? "bold" : "medium"}
                ml="2"
                display={{ base: "none", lg: "block" }}
                fontSize={{ base: "sm", lg: "20px" }}
                color="platinum"
                letterSpacing="wide"
                textAlign="left"
              >
                {item.label}
              </Text>
            </Flex>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};
