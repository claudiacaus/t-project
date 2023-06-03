import {Box} from '@chakra-ui/react'
import Head from 'next/head';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Home / Twitter</title>
        <meta property="og:title" content="Home / Twitter" key="title" />
      </Head>
      <h1>Home</h1>
    </Box>
  )
}
