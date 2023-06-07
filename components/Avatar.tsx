import useSingleUser from "@/hooks/useSingleUser";
import { Flex, Image } from "@chakra-ui/react";
import { useCallback } from "react";
import { useRouter } from "next/router";

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

export const Avatar = ({ userId, isLarge, hasBorder }: AvatarProps) => {
  const router = useRouter();
  const { data: fetchedUser } = useSingleUser(userId);

  const onAvatarClick = useCallback(
    (event: any) => {
      event.stopPropagation();

      const url = `/users/${userId}`;

      router.push(url);
    },
    [router, userId]
  );

  return (
    <Flex
      w={isLarge ? "130px" : "40px"}
      h={isLarge ? "130px" : "40px"}
      borderRadius="full"
      bg="gray.100"
      justify="center"
      align="center"
      border={hasBorder ? "3px solid black" : ""}
      _hover={{ cursor: "pointer", opacity: 0.9 }}
      transition={"all 0.3s ease"}
      overflow="hidden"
      pos={"relative"}
    >
      <Image
        objectFit="cover"
        alt="user avatar"
        onClick={onAvatarClick}
        src={fetchedUser?.profileImage || "/images/placeholder.webp"}
      />
    </Flex>
  );
};
