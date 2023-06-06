import React from "react";
import { Image, Box, Button, Flex } from "@chakra-ui/react";
import useSingleUser from "@/hooks/useSingleUser";
import useCurrentUser from "@/hooks/useCurrentUser";
import { Avatar } from "../Avatar";
import { UserBio } from "./UserBio";

interface UserHeroProps {
  userId: string;
}

export const UserHero = ({ userId }: UserHeroProps) => {
  const { data: fetchedUser } = useSingleUser(userId);
  const { data: currentUser } = useCurrentUser();

  return (
    <>
      <Box bgColor="dimgrey" height="200px" width="100%" position="relative">
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

      <UserBio userId={userId} />
    </>
  );
};
