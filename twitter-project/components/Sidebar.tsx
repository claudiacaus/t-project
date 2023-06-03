import { Text, Flex, Button } from "@chakra-ui/react";
import { SidebarLogo } from "./SidebarLogo";
import Link from "next/link";
import Image from "next/image";
import Home from "@/public/images/svg/home.svg";
import Notification from "@/public/images/svg/notification.svg";
import Profile from "@/public/images/svg/profile.svg";
import { BiLogOut } from "react-icons/bi";
import { TweetButton } from "./TweetButton";
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
    <Flex flexDirection="column" py="10px">
      <Flex flexDirection="column" justifyContent="flex-start" gap={2}>
        <SidebarLogo />
        {items.map((item) => (
          <Link href={item.href} key={item.label}>
            <Flex
              flexDir={{ base: "column", lg: "row" }}
              justifyContent="center"
              alignItems={"center"}
              borderRadius={{ base: "50%", lg: "60px" }}
              px={{ base: "0", lg: "10px" }}
              py={{ base: "0", lg: "6px" }}
              width={{ base: "50px", lg: "max-content" }}
              height="50px"
              _hover={{
                cursor: "pointer",
                bg: "gray.800",
                bgColor: "gray.800",
              }}
              transition={"all 0.2s ease-in-out"}
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
        <Button
          onClick={() => {}}
          display="flex"
          variant="ghost"
          flexDir={{ base: "column", lg: "row" }}
          justifyContent="center"
          alignItems={"center"}
          borderRadius={{ base: "50%", lg: "60px" }}
          px={{ base: "0", lg: "10px" }}
          py={{ base: "0", lg: "6px" }}
          width={{ base: "50px", lg: "max-content" }}
          height="50px"
          _hover={{
            cursor: "pointer",
            bg: "gray.800",
            bgColor: "gray.800",
          }}
          transition={"all 0.2s ease-in-out"}
        >
          <BiLogOut size={24} />
          <Text
            display={{ base: "none", lg: "block" }}
            fontSize={{ base: "sm", lg: "20px" }}
            color="platinum"
            letterSpacing="wide"
            textAlign="left"
          >
            Logout
          </Text>
        </Button>
        <TweetButton onClick={() => {}} />
      </Flex>
    </Flex>
  );
};
