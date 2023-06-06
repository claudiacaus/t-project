import { Flex, Image, Text, Box, Button } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { useCallback, useMemo, useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";

interface ImageUploadProps {
  value?: string;
  disabled?: boolean;
  onChange?: (base64: string) => void;
  label: string;
}

export const ImageUpload = ({
  value,
  disabled,
  onChange,
  label,
}: ImageUploadProps) => {
  const [base64, setBase64] = useState(value);

  const handleChange = useCallback(
    (base64: string) => {
      onChange?.(base64);
    },
    [onChange]
  );

  // the onDrop function is called when a file is dropped on the dropzone, it takes the files array as an argument and we can access the first file with files[0]
  const handleDrop = useCallback(
    (files: any) => {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        setBase64(event.target.result);
        handleChange(event.target.result);
      };
      reader.readAsDataURL(file);
    },
    [handleChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: handleDrop,
    disabled,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
  });

  return (
    <Flex
      flexDir="column"
      justifyContent={"center"}
      {...getRootProps()}
      width="80%"
      height="50px"
      pl={"10px"}
      fontSize="1.2rem"
      border={"1px"}
      borderRadius={"10px"}
      borderColor={"dimgrey"}
      _placeholder={{ color: "gray.400", fontSize: "1rem" }}
      color="platinum"
      overflow={"hidden"}
    >
      <input {...getInputProps()} />
      {base64 ? (
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Image
            src={base64}
            width="100"
            height="100"
            objectFit="cover"
            alt="Uploaded image"
          />{" "}
          <AiOutlinePicture style={{ marginLeft: "10px" }} />
        </Flex>
      ) : (
        <Flex alignItems={"center"} justifyContent={"space-between"} pr="10px">
          <Text color="gray.400" fontSize="0.9rem">
            {label}
          </Text>
          <AiOutlinePicture style={{ marginLeft: "10px" }} />
        </Flex>
      )}
    </Flex>
  );
};
