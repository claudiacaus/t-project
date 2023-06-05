import React, { useCallback } from "react";
import { useRouter } from "next/router";
import useCurrentUser from "@/hooks/useCurrentUser";
import { BsDot } from "react-icons/bs";
import { useLogin } from "@/hooks/useLogin";
import { LoginModal } from "../modal/LoginModal";
import Image from "next/dist/client/image";
import { Flex, Text, Box } from "@chakra-ui/layout";
import Link from "next/link";
import { ButtonLink } from "../ButtonLink";

interface SidebarItemProps {
  label: string;
  iconSrc: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  auth?: boolean;
  alert?: boolean;
  children?: React.ReactNode;
}

export const SidebarItem = ({
  label,
  iconSrc,
  href,
  onClick,
  auth,
  alert,
  children,
  icon,
}: SidebarItemProps) => {
  const router = useRouter();
  const LoginModal = useLogin();

  const isCurrentPath = router.pathname === href;

  const { data: currentUser } = useCurrentUser();

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }

    if (href) {
      router.push(href);
    }
  }, [onClick, router, href]);

  return (
    <ButtonLink key={label} onClick={handleClick}>
      <Image src={iconSrc} alt={label} />
      {icon}
      {alert ? (
        <Box>
          <BsDot color="red" size={70} />
        </Box>
      ) : null}
      <Text
        fontWeight={isCurrentPath ? "bold" : "medium"}
        ml="2"
        display={{ base: "none", lg: "block" }}
        fontSize={{ base: "sm", lg: "20px" }}
        color="platinum"
        letterSpacing="wide"
        textAlign="left"
      >
        {label}
      </Text>
    </ButtonLink>
  );
};
