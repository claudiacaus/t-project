import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "@/components/Header";
import { Form } from "@/components/Form";
import { PostFeed } from "@/components/posts/PostFeed";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <Box>
      <Head>
        <title>Home / Twitter</title>
        <meta property="og:title" content="Home / Twitter" key="title" />
      </Head>
      <Header label="Home" />
      <Form placeholder="What's happening?" />
      <PostFeed userId={userId as string} />
    </Box>
  );
}
