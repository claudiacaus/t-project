import { create } from "zustand";

interface EditStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useEdit = create<EditStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
