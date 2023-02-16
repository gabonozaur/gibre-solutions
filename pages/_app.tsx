import { ChakraProvider, Text } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Text color={{ base: "green.500", sm: "blue.500" }}>Marcel is there</Text>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
