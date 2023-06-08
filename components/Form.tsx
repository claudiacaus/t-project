import React from "react";
import {
  Box,
  Heading,
  Flex,
  Button,
  Textarea,
  Divider,
} from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import useCurrentUser from "@/hooks/useCurrentUser";
import { usePosts } from "@/hooks/usePosts";
import { useLogin } from "@/hooks/useLogin";
import { useRegister } from "@/hooks/useRegister";
import { useSinglePost } from "@/hooks/useSinglePost";
import { Avatar } from "@/components/Avatar";
import { LoginModal } from "./modal/LoginModal";
import { RegisterModal } from "./modal/RegisterModal";
import { MoonLoader } from "react-spinners";

interface FormProps {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
}

export const Form = ({ placeholder, isComment, postId }: FormProps) => {
  const registerModal = useRegister();
  const loginModal = useLogin();

  const { data: currentUser, isLoading } = useCurrentUser();
  const { mutate: mutatePosts } = usePosts();
  const { mutate: mutateSinglePost } = useSinglePost(postId as string);

  const [body, setBody] = useState("");
  const [isLoadingContent, setIsLoadingContent] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoadingContent(true);

      const url = isComment ? `/api/comments?postId=${postId}` : "/api/posts";

      await axios.post(url, { body });

      toast.success("Tweet created");
      setBody("");
      mutatePosts();
      mutateSinglePost();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoadingContent(false);
    }
  }, [body, mutatePosts, isComment, postId, mutateSinglePost]);

  const maxTextLength = 280;
  const textLength = body.length;
  const textLengthRemaining = maxTextLength - textLength;

  const maxTextFull = textLengthRemaining < 0;

  return (
    <Box borderBottom="1px" borderColor="dimgrey" px={5} py={2}>
      {isLoading ? (
        <Flex justifyContent={"center"} alignItems={"center"} h="full">
          <MoonLoader color="blue" size={80} />
        </Flex>
      ) : currentUser ? (
        <Flex direction="row" gap="10px">
          <Box ml="10px">
            <Avatar userId={currentUser?.id} />
          </Box>
          <Box w="full" height="max-content">
            <Textarea
              border="none"
              borderRadius={0}
              isDisabled={isLoadingContent || maxTextFull}
              onChange={(event) => setBody(event.target.value)}
              value={body}
              mt={3}
              w="full"
              bg="black"
              _focus={{
                ring: 0,
                outline: "none",
              }}
              fontSize="18px"
              color="white"
              maxLength={280}
              minH="100px"
              maxH="500px"
              resize="vertical"
              height="max-content"
              placeholder={placeholder}
              opacity={isLoadingContent ? 0.8 : 1}
            />
            <Divider
              opacity={0}
              _focus={{ opacity: 100 }}
              borderColor="dimgrey"
            />
            <Flex mt={4} direction="row" justify="end">
              <Button
                mr="10px"
                mb="5px"
                isDisabled={isLoadingContent || !body}
                onClick={onSubmit}
                _hover={{ opacity: 0.8 }}
                _active={{ opacity: 0.6 }}
                px="14px"
                py="6px"
              >
                Tweet
              </Button>
            </Flex>
          </Box>
        </Flex>
      ) : (
        <Box py={20}>
          <Heading
            color="white"
            fontSize="2xl"
            textAlign="center"
            mb={4}
            fontWeight="bold"
          >
            Welcome to Twitter
          </Heading>
          <Flex
            direction="row"
            align="center"
            justify="center"
            gap="10px"
            py="30px"
          >
            <Button
              onClick={loginModal.onOpen}
              bg="blue"
              color="white"
              _hover={{ opacity: 0.8 }}
              _active={{ opacity: 0.8 }}
            >
              Login
            </Button>
            <Button
              onClick={registerModal.onOpen}
              bg="white"
              color="black"
              _hover={{ opacity: 0.8 }}
              _active={{ opacity: 0.6 }}
            >
              Register
            </Button>
          </Flex>
        </Box>
      )}
      <LoginModal />
      <RegisterModal />
    </Box>
  );
};
