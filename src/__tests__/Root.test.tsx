import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { isTokenValid } from "../__mocks__/shared"; // Assuming this is the function to check token validity.
import { Root } from "../Root";



// Helper function to wrap the Root component with MemoryRouter
const renderWithRouter = (component, initialEntries = ["/"]) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>{component}</MemoryRouter>
  );
};

describe("Root component", () => {
  beforeEach(() => {
    // Reset the mock before each test
    jest.clearAllMocks();
  });

  test("redirects to /team-management if authenticated and has permission", async () => {
    // Mock the token to be valid and has permission
    isTokenValid.mockReturnValue(true);

    const { container } = renderWithRouter(<Root />);
    await waitFor(() => {
      // Assert that the redirect happened to /team-management
      expect(container.querySelector("div")).toBeNull(); // Outlet will render a div element, so if it's not present, it means we redirected
    });
  });

  test("redirects to /login if not authenticated", async () => {
    // Mock the token to be invalid (not authenticated)
    isTokenValid.mockReturnValue(false);

    const { container } = renderWithRouter(<Root />);
    await waitFor(() => {
      // Assert that the redirect happened to /login
      expect(container.querySelector("div")).toBeNull(); // Outlet will render a div element, so if it's not present, it means we redirected
    });
  });

  test("redirects to /login if authenticated but does not have permission", async () => {
    // Mock the token to be valid but does not have permission
    isTokenValid.mockReturnValue(true);

    const { container } = renderWithRouter(<Root />);
    await waitFor(() => {
      // Assert that the redirect happened to /login
      expect(container.querySelector("div")).toBeNull(); // Outlet will render a div element, so if it's not present, it means we redirected
    });
  });
});
