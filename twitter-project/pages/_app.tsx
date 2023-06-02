import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/theme/theme';

interface MyAppProps {
  Component: React.ElementType;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;
