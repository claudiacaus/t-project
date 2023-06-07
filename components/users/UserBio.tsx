import React, { useMemo } from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import useSingleUser from "@/hooks/useSingleUser";
import useCurrentUser from "@/hooks/useCurrentUser";
import { BiCalendar } from "react-icons/bi";
import { format } from "date-fns";
import { useEdit } from "@/hooks/useEdit";
import { EditModal } from "../modal/EditModal";

interface UserBioProps {
  userId: string;
}

export const UserBio = ({ userId }: UserBioProps) => {
  const { data: fetchedUser } = useSingleUser(userId);
  const { data: currentUser } = useCurrentUser();

  const editInfo = useEdit();

  const createdAt = useMemo(() => {
    if (!fetchedUser?.createdAt) return null;
    return format(new Date(fetchedUser.createdAt), "MMMM yyyy");
  }, [fetchedUser?.createdAt]);

  return (
    <Flex
      flexDir="column"
      borderBottom="1px"
      borderColor="gray.800"
      width="100%"
      mt="40px"
      position="relative"
    >
      <Flex
        justifyContent="flex-end"
        alignItems="center"
        right="10px"
        top="-30px"
        position="absolute"
      >
        {currentUser?.id === userId ? (
          <Button
            py="6px"
            px="12px"
            bg="transparent"
            border="1px"
            borderColor="gray.600"
            fontSize="0.9rem"
            _hover={{ opacity: 0.8 }}
            onClick={editInfo.onOpen}
          >
            Edit Profile
          </Button>
        ) : (
          <Button
            py="6px"
            px="12px"
            bg="white"
            color="black"
            fontSize="0.9rem"
            _hover={{ opacity: 0.8 }}
          >
            Follow
          </Button>
        )}
      </Flex>
      <Flex
        flexDir="column"
        justifyContent="flex-start"
        ml="20px"
        mb="10px"
        mt="40px"
      >
        <Text fontSize="lg" fontWeight="bold" color="platinum" lineHeight="1">
          {fetchedUser?.name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          @{fetchedUser?.username}
        </Text>
      </Flex>
      <Flex flexDir="column" justifyContent="flex-start" ml="20px" mb="10px">
        <Text>{fetchedUser?.bio}</Text>
        <Flex mt="10px" alignItems="center">
          <BiCalendar size={20} id="svg-color" />
          <Text fontSize="sm" color="gray.500" ml="5px">
            Joined {createdAt}
          </Text>
        </Flex>
        <Flex alignItems="center">
          <Flex mt="10px" alignItems="center" mr="20px">
            <Text fontSize="sm" color="white" mr="5px">
              {fetchedUser?.followingIds?.length}
            </Text>
            <Text fontSize="sm" color="gray.500">
              Following
            </Text>
          </Flex>
          <Flex mt="10px" alignItems="center">
            <Text fontSize="sm" color="white" mr="5px">
              {fetchedUser?.followersCount || 0}
            </Text>
            <Text fontSize="sm" color="gray.500">
              Followers
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <EditModal />
    </Flex>
  );
};
