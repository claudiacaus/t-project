import { Text, Flex, Button } from "@chakra-ui/react";
import { SidebarLogo } from "./SidebarLogo";
import Link from "next/link";
import Image from "next/image";
import Home from "@/public/images/svg/home.svg";
import Notification from "@/public/images/svg/notification.svg";
import Profile from "@/public/images/svg/profile.svg";
import { BiLogOut } from "react-icons/bi";
import { useRouter } from "next/router";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
import { ButtonLink } from "../ButtonLink";
import { SidebarItem } from "./SidebarItem";

interface SidebarProps {
  children?: React.ReactNode;
}

export const Sidebar = ({ children }: SidebarProps) => {
  const router = useRouter();

  const { data: currentUser } = useCurrentUser();

  const items = [
    {
      label: "Home",
      href: "/",
      iconSrc: Home, // renamed to iconSrc to match SidebarItemProps
    },
    {
      label: "Notifications",
      href: "/notifications",
      iconSrc: Notification, // renamed to iconSrc to match SidebarItemProps
    },
    {
      label: "Profile",
      href: "/users/1",
      iconSrc: Profile, // renamed to iconSrc to match SidebarItemProps
    },
  ];

  const icon = <BiLogOut />;
  return (
    <Flex flexDirection="column" py="10px">
      <Flex flexDirection="column" justifyContent="flex-start" gap={2}>
        <SidebarLogo />
        {items.map((item) => (
          <SidebarItem
            key={item.label}
            href={item.href}
            label={item.label}
            iconSrc={item.iconSrc} // use iconSrc
          />
        ))}

        {currentUser && (
          <SidebarItem
            label="Logout"
            onClick={() => signOut()}
            iconSrc=""
            icon={icon}
          />
        )}

        {children}
      </Flex>
    </Flex>
  );
};
