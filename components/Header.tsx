import { Flex, Heading, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

interface HeaderProps {
  label: string;
  showBackArrow?: boolean;
}

export const Header = ({ label, showBackArrow }: HeaderProps) => {
  const router = useRouter();

  const handleHomeClick = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Flex
      pl="25px"
      align="center"
      borderBottom="1px"
      borderColor="gray.800"
      gap="10px"
    >
      {showBackArrow && (
        <Button
          onClick={() => {}}
          display="flex"
          variant="ghost"
          flexDir={{ base: "column", lg: "row" }}
          justifyContent="center"
          alignItems={"center"}
          borderRadius={{ base: "50%", lg: "60px" }}
          p="0"
          mb="10px"
          width="30px"
          height="30px"
          _hover={{
            cursor: "pointer",
            bg: "gray.800",
            bgColor: "gray.800",
          }}
          transition={"all 0.2s ease-in-out"}
        >
          <BiArrowBack onClick={handleHomeClick} cursor="pointer" size={20} />
        </Button>
      )}
      <Heading as="h1" size="lg" fontSize="20px" fontWeight="bold" pb="10px">
        {label}
      </Heading>
    </Flex>
  );
};
