import { usePosts } from "@/hooks/usePosts";
import { PostItem } from "./PostItem";

interface PostFeedProps {
  userId?: string;
  postId?: string;
}

export const PostFeed = ({ userId }: PostFeedProps) => {
  const { data: posts = [] } = usePosts(userId);

  return (
    <>
      {posts.map((post: Record<string, any>) => (
        <PostItem key={post.id} data={post} userId={userId} />
      ))}
    </>
  );
};
