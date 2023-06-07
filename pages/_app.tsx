import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme/theme";
import { Layout } from "@/components/Layout";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

interface MyAppProps {
  Component: React.ElementType;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <ChakraProvider theme={theme} cssVarsRoot="body">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
