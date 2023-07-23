import React from "react";
import { render } from "@testing-library/react";
import EditTeam from "../pages/team-management/edit-team/EditTeam";

describe("Edit team component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<EditTeam />);
    expect(getByText(/Edit Team/i)).toBeInTheDocument();
  });
});
