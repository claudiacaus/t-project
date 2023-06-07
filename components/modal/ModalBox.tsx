import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Input,
  Flex,
} from "@chakra-ui/react";

interface ModalBoxProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
  onSubmit?: () => void;
}

export const ModalBox = ({
  title,
  isOpen,
  onClose,
  children,
  footer,
}: ModalBoxProps) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "full", md: "lg" }}
      >
        <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="12%" />
        <ModalContent
          mt="100px"
          bgColor="black"
          padding="15px"
          width={{ base: "100vw", md: "500px" }}
          height={{ base: "100vh", md: "max-content" }}
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

          <ModalBody
            color="platinum"
            width="100%"
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            gap="20px"
          >
            {children}
          </ModalBody>

          <ModalFooter>{footer}</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
