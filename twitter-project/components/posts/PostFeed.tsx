import { usePosts } from "@/hooks/usePosts";
import { useSinglePost } from "@/hooks/useSinglePost";

import { PostItem } from "./PostItem";

interface PostFeedProps {
  userId?: string;
  postId?: string;
}

export const PostFeed = ({ userId, postId }: PostFeedProps) => {
  const { data: posts = [] } = usePosts(userId);
  const { mutate: mutateSinglePost } = useSinglePost(postId as string);

  return (
    <>
      {posts.map((post: Record<string, any>) => (
        <PostItem
          key={post.id}
          data={post}
          userId={userId}
          mutateSinglePost={mutateSinglePost}
        />
      ))}
    </>
  );
};
