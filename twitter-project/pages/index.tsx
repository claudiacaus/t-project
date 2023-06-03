import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Home / Twitter</title>
        <meta property="og:title" content="Home / Twitter" key="title" />
      </Head>
      <Header label="Home" />
    </Box>
  );
}
