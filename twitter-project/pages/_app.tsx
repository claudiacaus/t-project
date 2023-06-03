import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme/theme";
import { Layout } from "@/components/Layout";

interface MyAppProps {
  Component: React.ElementType;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <ChakraProvider theme={theme} cssVarsRoot="body">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
