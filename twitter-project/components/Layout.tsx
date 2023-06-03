import { Box, Grid, Container, GridItem } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box bg="black" h="100vH">
      <Container h="full" maxW="6xl" px={{ base: "0", xl: "30" }}>
        <Grid templateColumns={{ base: "repeat(4, 1fr)" }} h="full">
          <Sidebar />
          <GridItem
            colSpan={{ base: 3, lg: 2 }}
            borderX="1px"
            borderColor="gray.700"
            minH="full"
          >
            {children}
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
