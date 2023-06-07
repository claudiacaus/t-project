import useCurrentUser from "@/hooks/useCurrentUser";
import useSingleUser from "@/hooks/useSingleUser";
import { useEdit } from "@/hooks/useEdit";
import { ModalBox } from "./ModalBox";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { InputBar } from "../InputBar";
import { Button, Heading } from "@chakra-ui/react";
import { ImageUpload } from "../ImageUpload";
import { mutate } from "swr";

export const EditModal = ({}) => {
  const { data: currentUser } = useCurrentUser();
  const { mutate: mutateFetchedUser } = useSingleUser(currentUser?.id);
  const editModal = useEdit();

  const [profileImage, setProfileImage] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // set initial values
  useEffect(() => {
    setProfileImage(currentUser?.profileImage);
    setCoverImage(currentUser?.coverImage);
    setName(currentUser?.name);
    setUsername(currentUser?.username);
    setBio(currentUser?.bio);
  }, [
    currentUser?.name,
    currentUser?.username,
    currentUser?.bio,
    currentUser?.profileImage,
    currentUser?.coverImage,
  ]);

  const onEditSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await axios.patch("/api/edit", {
        name,
        username,
        bio,
        profileImage,
        coverImage,
      });
      mutateFetchedUser();
      mutate("/api/users");
      toast.success("Profile updated");
      editModal.onClose();
    } catch (error) {
      toast.error("Something went wrong");
      editModal.onClose();
    } finally {
      setIsLoading(false);
    }
  }, [
    name,
    username,
    bio,
    profileImage,
    coverImage,
    mutateFetchedUser,
    editModal,
  ]);

  return (
    <ModalBox
      title="Edit Profile"
      isOpen={editModal.isOpen}
      onClose={editModal.onClose}
      onSubmit={onEditSubmit}
    >
      <Heading as="h1" fontSize="24px" color="white">
        Edit Profile
      </Heading>
      <InputBar
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        disabled={isLoading}
      />
      <InputBar
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        disabled={isLoading}
      />
      <InputBar
        placeholder="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        type="text"
        disabled={isLoading}
      />
      <ImageUpload
        value={profileImage}
        disabled={isLoading}
        onChange={(image) => setProfileImage(image)}
        label="Upload profile image"
      />
      <ImageUpload
        value={coverImage}
        disabled={isLoading}
        onChange={(image) => setCoverImage(image)}
        label="Upload cover image"
      />
      <Button
        type="submit"
        bg="white"
        color="black"
        _hover={{ opacity: 0.8 }}
        isLoading={isLoading}
        onClick={onEditSubmit}
      >
        Save
      </Button>
    </ModalBox>
  );
};
