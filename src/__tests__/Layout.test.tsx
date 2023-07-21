import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Outlet } from "react-router-dom";
import Layout from "../layouts/Layout";

it("returns an outlet", () => {
  const { getByTestId } = render(<Layout />);
  expect(getByTestId("outlet")).not.toBeNull();
});
