import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme/theme";
import { Layout } from "@/components/Layout";
import { LoginModal } from "@/components/modal/LoginModal";

interface MyAppProps {
  Component: React.ElementType;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <ChakraProvider theme={theme} cssVarsRoot="body">
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
