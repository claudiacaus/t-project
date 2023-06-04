import { Input } from "@chakra-ui/react";

interface InputBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  disabled?: boolean;
}

export const InputBar: React.FC<InputBarProps> = ({
  placeholder,
  value,
  onChange,
  type,
  disabled,
}) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      disabled={disabled}
      bg="black"
      width="80%"
      height="50px"
      pl={"10px"}
      fontSize="1.2rem"
      borderRadius={"10px"}
      borderColor={"gray.700"}
      _placeholder={{ color: "gray.400", fontSize: "1rem" }}
      color="platinum"
    />
  );
};
