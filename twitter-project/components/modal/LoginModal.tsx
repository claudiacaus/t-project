import { useLogin } from "@/hooks/useLogin";
import { useState, useCallback } from "react";
import { InputBar } from "@/components/InputBar";
import { ModalBox } from "@/components/modal/ModalBox";
import { Button, useDisclosure, Heading } from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";

export const LoginModal = () => {
  const loginModal = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      loginModal.onClose();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [loginModal]);

  return (
    <>
      <Button
        onClick={onOpen}
        bg="black"
        color="white"
        _hover={{ bg: "gray.700" }}
        _active={{ bg: "gray.800" }}
      >
        Login
      </Button>
      <ModalBox title="Login" isOpen={isOpen} onClose={onClose}>
        <BsTwitter size="28px" />
        <Heading as="h1" fontSize="24px" color="white">
          Sign in to Twitter
        </Heading>
        <InputBar
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        <InputBar
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          disabled={isLoading}
        />
        <Button
          onClick={onSubmit}
          bg="white"
          color="black"
          _hover={{ bg: "platinum" }}
          _active={{ bg: "platinum" }}
          width={"80%"}
          transition={"all 0.2s ease-in-out"}
        >
          Sign in
        </Button>
      </ModalBox>
    </>
  );
};
