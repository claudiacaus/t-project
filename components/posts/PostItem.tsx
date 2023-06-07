import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { formatDistanceToNowStrict } from "date-fns";
import { useLogin } from "@/hooks/useLogin";
import { usePosts } from "@/hooks/usePosts";
import useCurrentUser from "@/hooks/useCurrentUser";
import { Avatar } from "../Avatar";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useSession } from "next-auth/react";

interface PostItemProps {
  data: Record<string, any>;
  userId?: string;
}

export const PostItem: React.FC<PostItemProps> = ({ data = {}, userId }) => {
  const router = useRouter();
  const loginModal = useLogin();

  const { data: currentUser } = useCurrentUser();
  const { mutate: mutatePosts } = usePosts();

  const goToUser = useCallback(
    (event: any) => {
      event.stopPropagation(); // Prevents the click from propagating to the parent element
      router.push(`/users/${data.user.id}`);
    },
    [router, data.user.id]
  );

  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data.createdAt]);

  const deletePost = useCallback(async () => {
    try {
      await axios.delete(`/api/posts/${data.id}`);
      toast.success("Post deleted");
      mutatePosts();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }, [data.id, mutatePosts]);

  return (
    <Box
      borderBottom="1px"
      borderColor="dimgrey"
      p="10px"
      cursor="pointer"
      _hover={{ opacity: 0.8 }}
      transition="all 0.2s"
    >
      <Flex direction="row" align="start" gap={3}>
        <Avatar userId={data.user.id} />
        <Box ml="10px">
          <Flex direction="row" align="center" gap={2}>
            <Text
              onClick={goToUser}
              color="white"
              fontWeight="semibold"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              {data.user.name}
            </Text>
            <Text
              onClick={goToUser}
              color="gray.500"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
              display={{ base: "none", md: "block" }}
            >
              @{data.user.username}
            </Text>
            <Text color="gray.500" fontSize="sm">
              {createdAt}
            </Text>
            {currentUser && currentUser?.id === data.user.id && (
              <Button
                onClick={deletePost}
                p="4px"
                variant="ghost"
                _hover={{ bg: "dimgrey" }}
              >
                <RiDeleteBin5Line size={20} id="svg-color" />
              </Button>
            )}
          </Flex>
          <Text color="white" mt={1}>
            {data.body}
          </Text>

          <Flex direction="row" align="center" mt={3} gap={10}>
            <Flex
              direction="row"
              align="center"
              color="neutral.500"
              gap={2}
              cursor="pointer"
              transition="all 0.2s"
            >
              <AiOutlineMessage size={20} />
              <Text>{data.comments?.length || 0}</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
