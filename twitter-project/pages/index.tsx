import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "@/components/Header";
import { Form } from "@/components/Form";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Home / Twitter</title>
        <meta property="og:title" content="Home / Twitter" key="title" />
      </Head>
      <Header label="Home" />
      <Form placeholder="What's happening?" />
    </Box>
  );
}
