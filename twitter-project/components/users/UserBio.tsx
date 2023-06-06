import React, { useMemo } from "react";
import { Flex, Text, Image, Box, Button } from "@chakra-ui/react";
import useSingleUser from "@/hooks/useSingleUser";
import useCurrentUser from "@/hooks/useCurrentUser";
import { format } from "date-fns";

interface UserBioProps {
  userId: string;
}

export const UserBio = ({ userId }: UserBioProps) => {
  const { data: fetchedUser } = useSingleUser(userId);
  const { data: currentUser } = useCurrentUser();

  const createdAt = useMemo(() => {
    if (!fetchedUser?.createdAt) return null;
    return format(new Date(fetchedUser.createdAt), "MMMM yyyy");
  }, [fetchedUser?.createdAt]);

  return (
    <Flex borderBottom="1px" borderColor="gray.800" width="100%" mt="40px">
      <Flex flexDir="column" justifyContent="flex-start" ml="20px" mb="10px">
        <Text fontSize="lg" fontWeight="bold" color="platinum" lineHeight="1">
          {fetchedUser?.name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          @{fetchedUser?.username}
        </Text>
      </Flex>
    </Flex>
  );
};
