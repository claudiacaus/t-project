import {
  Box,
  Grid,
  Container,
  GridItem,
  useDisclosure,
} from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import { FollowBar } from "./FollowBar";
import { TweetButton } from "./TweetButton";
import { ModalBox } from "./ModalBox";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="black" h="100vH" w="100vw">
      <Container
        h="full"
        w={{ base: "full", lg: "6xl" }}
        px={{ base: "0", xl: "30" }}
      >
        <Grid templateColumns={{ base: "repeat(4, 1fr)" }} h="full">
          <Sidebar>
            <TweetButton onClick={onOpen} />
          </Sidebar>
          <GridItem
            py="10px"
            colSpan={{ base: 3, lg: 2 }}
            borderX="1px"
            borderColor="gray.800"
            minH="full"
          >
            {children}
          </GridItem>
          <FollowBar />
        </Grid>
      </Container>
      <ModalBox title="Modal Title" isOpen={isOpen} onClose={onClose}>
        <p>Modal Content</p>
      </ModalBox>
    </Box>
  );
};
