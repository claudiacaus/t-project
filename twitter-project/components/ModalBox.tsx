import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface ModalBoxProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const ModalBox = ({
  title,
  isOpen,
  onClose,
  children,
}: ModalBoxProps) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "full", md: "lg" }}
      >
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="20%"
          backdropBlur="1px"
        />
        <ModalContent
          mt="100px"
          bgColor="black"
          width={{ base: "100vw", md: "500px" }}
          height={{ base: "100vh", md: "250px" }}
        >
          <ModalCloseButton
            position="absolute"
            left="10"
            top="10"
            width={"30px"}
            height={"30px"}
            borderRadius="50%"
            _hover={{
              cursor: "pointer",
              bg: "gray.800",
              bgColor: "gray.800",
            }}
            transition={"all 0.2s ease-in-out"}
          />
          <ModalBody mt="30px" color="platinum" ml="15px">
            {children}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose} py="6" px="13">
              Tweet
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
