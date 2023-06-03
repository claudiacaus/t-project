import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme/theme";
import { Layout } from "@/components/Layout";

interface MyAppProps {
  Component: React.ElementType;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
