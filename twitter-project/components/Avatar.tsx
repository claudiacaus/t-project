import { Flex } from "@chakra-ui/react";

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

export const Avatar = ({ userId, isLarge, hasBorder }: AvatarProps) => {
  return (
    <Flex
      w={isLarge ? "60px" : "40px"}
      h={isLarge ? "60px" : "40px"}
      borderRadius="full"
      bg="gray.100"
      justify="center"
      align="center"
      border={hasBorder ? "1px solid #E2E8F0" : ""}
    ></Flex>
  );
};
