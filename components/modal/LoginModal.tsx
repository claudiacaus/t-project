import { useLogin } from "@/hooks/useLogin";
import { useRegister } from "@/hooks/useRegister";
import { useState, useCallback } from "react";
import { InputBar } from "@/components/InputBar";
import { ModalBox } from "@/components/modal/ModalBox";
import { Button, Flex, Text, Heading } from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";
import { signIn } from "next-auth/react";

export const LoginModal = () => {
  const loginModal = useLogin();
  const registerModal = useRegister();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSignIn = useCallback(() => {
    if (isLoading) return;
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal, isLoading]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await signIn("credentials", { email, password });

      loginModal.onClose();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [loginModal, email, password]);

  return (
    <>
      <ModalBox
        title="Login"
        isOpen={loginModal.isOpen}
        onClose={loginModal.onClose}
      >
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
        <Flex
          justifyContent="space-between"
          alignItems="center"
          mt="10px"
          gap="10px"
        >
          <Text fontSize="14px" color="gray.300">
            First time using Twitter?
          </Text>
          <Button
            onClick={handleLoginSignIn}
            bg="black"
            color="blue"
            p="0"
            _hover={{ textDecor: "underline" }}
            _focus={{ bgColor: "black" }}
            _active={{ bgColor: "black" }}
          >
            Create an account
          </Button>
        </Flex>
      </ModalBox>
    </>
  );
};
