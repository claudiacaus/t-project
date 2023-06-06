import { usePosts } from "@/hooks/usePosts";

interface PostFeedProps {
  userId?: string;
}

export const PostFeed = ({ userId }: PostFeedProps) => {
  const { data: posts = [] } = usePosts(userId);

  return (
    <div>
      {posts.map((post: any) => (
        <div key={post.id}>{post}</div>
      ))}
    </div>
  );
};
