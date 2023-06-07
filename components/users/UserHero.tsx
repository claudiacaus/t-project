import { Image, Box } from "@chakra-ui/react";
import useSingleUser from "@/hooks/useSingleUser";
import { Avatar } from "../Avatar";
import { UserBio } from "./UserBio";

interface UserHeroProps {
  userId: string;
}

export const UserHero = ({ userId }: UserHeroProps) => {
  const { data: fetchedUser } = useSingleUser(userId);

  return (
    <>
      <Box bgColor="dimgrey" height="200px" width="100%" position="relative">
        {fetchedUser?.coverImage && (
          <Image
            objectFit="cover"
            alt="Cover Image"
            width={fetchedUser.coverImage ? "100%" : "0%"}
            height="100%"
            src={fetchedUser.coverImage}
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
