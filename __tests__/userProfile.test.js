import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useRouter } from "next/router";
import UserProfile from "../pages/users/[userId].tsx";
import { useSingleUser } from "@/hooks/useSingleUser";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      query: { userId: "testUserId" },
    };
  },
}));

describe("UserProfile", () => {
  it("renders without crashing", () => {
    render(<UserProfile />);
  });
});
