import { Button } from "@chakra-ui/button";

interface TweetButtonProps {
  onClick: () => void;
}

export const TweetButton = ({ onClick }: TweetButtonProps) => {
  return (
    <Button
      mt="20px"
      onClick={onClick}
      bg="blue"
      color="white"
      borderRadius="60px"
      fontWeight="bold"
      fontSize="20px"
      width="90%"
      _hover={{
        bg: "blueHover",
      }}
    >
      Tweet
    </Button>
  );
};
