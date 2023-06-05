import { Flex, Text } from "@chakra-ui/react";

interface FollowBarProps {}

export const FollowBar = ({}: FollowBarProps) => {
  return (
    <Flex
      display={{ base: "none", lg: "block" }}
      flexDir={"column"}
      bg="black"
      w="100%"
      py="10px"
      ml="10px"
    >
      <Flex
        w="90%"
        mx="auto"
        py="2"
        px="15"
        borderRadius="xl"
        bgColor={"gray.800"}
      >
        <Text fontWeight="bold" fontSize="20px" color="platinum">
          Who to follow
        </Text>
      </Flex>
    </Flex>
  );
};
