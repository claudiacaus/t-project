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
      _placeholder={{ color: "gray.700" }}
      color="platinum"
    />
  );
};
