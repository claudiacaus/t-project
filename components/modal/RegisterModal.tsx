import { useState, useCallback } from "react";
import { InputBar } from "@/components/InputBar";
import { ModalBox } from "@/components/modal/ModalBox";
import { Button, Heading, Flex, Text } from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";
import { useLogin } from "@/hooks/useLogin";
import { useRegister } from "@/hooks/useRegister";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

export const RegisterModal = () => {
  const loginModal = useLogin();
  const registerModal = useRegister();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await axios.post("/api/register", {
        email,
        password,
        username,
        name,
      });

      setIsLoading(false);

      toast.success("Account created.");

      signIn("credentials", {
        email,
        password,
      });

      registerModal.onClose();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [email, password, registerModal, username, name]);

  const handleRegisterSignIn = useCallback(() => {
    if (isLoading) return;
    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal, isLoading]);

  return (
    <>
      <ModalBox
        title="Register"
        isOpen={registerModal.isOpen}
        onClose={registerModal.onClose}
      >
        <BsTwitter size="28px" />
        <Heading as="h1" fontSize="24px" color="white" mb="20px">
          Create an account
        </Heading>
        <InputBar
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isLoading}
        />
        <InputBar
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={isLoading}
        />
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
          _active={{ bg: "gray.300" }}
          disabled={isLoading}
          width={"80%"}
          mt="30px"
        >
          Register
        </Button>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          mt="10px"
          gap="10px"
        >
          <Text fontSize="14px" color="gray.300">
            Already have an account?
          </Text>
          <Button
            onClick={handleRegisterSignIn}
            bg="black"
            color="blue"
            p="0"
            _hover={{ textDecor: "underline" }}
            _focus={{ bgColor: "black" }}
            _active={{ bgColor: "black" }}
          >
            Sign in
          </Button>
        </Flex>
      </ModalBox>
    </>
  );
};
