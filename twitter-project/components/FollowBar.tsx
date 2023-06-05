import useUsers from "@/hooks/useUsers";
import { Flex, Text } from "@chakra-ui/react";
import { Avatar } from "./Avatar";

interface FollowBarProps {}

export const FollowBar = ({}: FollowBarProps) => {
  const { data: users = [] } = useUsers();

  if (users.length === 0) {
    return null;
  }

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
        flexDir={"column"}
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

        <Flex flexDir="column" mt="20px" gap="20px">
          {users &&
            users.map((user: Record<string, any>) => (
              <Flex
                gap="10px"
                key={user.id}
                justifyContent="flex-start"
                alignItems="center"
              >
                <Avatar userId={user.id} />
                <Flex flexDir="column">
                  <Text color="platinum" fontWeight="bold" fontSize="14px">
                    {user.name}
                  </Text>
                  <Text color="platinum" fontSize="14px">
                    {user.username}
                  </Text>
                </Flex>
              </Flex>
            ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
