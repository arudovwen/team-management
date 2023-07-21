import React from "react";
import { render,cleanup } from "@testing-library/react";
import CreateTeam from "../pages/team-management/create-team/CreateTeam"

afterEach(cleanup)

describe("Create team component", () => {
    it("should be in the document", () => {
      const { getByText } = render(<CreateTeam />);
      expect(getByText(/Create Team/i)).toBeInTheDocument();
    });
  });