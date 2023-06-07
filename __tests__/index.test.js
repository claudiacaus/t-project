import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";
import Home from "../pages/index";

import UserProfile from "./../pages/users/[userId]";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      query: { userId: "testUserId" },
    };
  },
}));

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
