import React from "react";
import { Flex, Text, Image, Box } from "@chakra-ui/react";
import useSingleUser from "@/hooks/useSingleUser";
import { Avatar } from "../Avatar";

interface UserHeroProps {
  userId: string;
}

export const UserHero = ({ userId }: UserHeroProps) => {
  const { data: fetchedUser } = useSingleUser(userId);
  return (
    <Flex>
      <Box bgColor="dimgrey" height="200px" width="100%" position={"relative"}>
        {fetchedUser?.profileBanner && (
          <Image
            objectFit="cover"
            alt="Cover Image"
            src={fetchedUser.profileBanner}
          />
        )}
        <Box position="absolute" bottom="-65px" left="20px" zIndex="2">
          <Avatar userId={userId} isLarge hasBorder />
        </Box>
      </Box>
    </Flex>
  );
};
