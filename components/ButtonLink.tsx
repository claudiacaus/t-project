import { Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

interface ButtonLinkProps {
  href?: string;
  onClick?: () => void;
  label?: string;
  children: React.ReactNode;
}

export const ButtonLink = ({
  href,
  onClick,
  label,
  children,
}: ButtonLinkProps) => {
  const router = useRouter();
  const isCurrentPath = router.pathname === href;

  const Content = (
    <Flex
      flexDir={{ base: "column", lg: "row" }}
      justifyContent="space-between"
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
      {children}
    </Flex>
  );

  if (href) {
    return <Link href={href}>{Content}</Link>;
  } else {
    return (
      <Button
        onClick={onClick}
        display="flex"
        variant="ghost"
        color="platinum"
        flexDir={{ base: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems={"center"}
        borderRadius={{ base: "50%", lg: "60px" }}
        px={{ base: "0" }}
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
        {Content}
      </Button>
    );
  }
};
