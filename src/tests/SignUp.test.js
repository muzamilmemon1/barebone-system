import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // For routing
import SignUp from "./SignUp";

// Mock navigate function from react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("SignUp Component", () => {
  test("renders the form fields correctly", () => {
    render(
      <Router>
        <SignUp />
      </Router>
    );

    // Check if all the input fields are rendered
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Age")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email address")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Confirm Password")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });

  test("shows validation errors for empty fields on submit", async () => {
    render(
      <Router>
        <SignUp />
      </Router>
    );

    fireEvent.click(screen.getByText("Sign Up"));

    // Check for validation error messages
    expect(await screen.findByText("Name is required")).toBeInTheDocument();
    expect(await screen.findByText("Age is required")).toBeInTheDocument();
    expect(await screen.findByText("Email is required")).toBeInTheDocument();
    expect(await screen.findByText("Password is required")).toBeInTheDocument();
    expect(
      await screen.findByText("Confirm Password is required")
    ).toBeInTheDocument();
  });

  test("shows password mismatch error", async () => {
    render(
      <Router>
        <SignUp />
      </Router>
    );

    // Enter values for password and confirm password fields
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Confirm Password"), {
      target: { value: "differentPassword" },
    });

    fireEvent.click(screen.getByText("Sign Up"));

    // Wait for the error message
    expect(await screen.findByText("Passwords must match")).toBeInTheDocument();
  });

  test("submits the form successfully with valid data", async () => {
    const navigateMock = jest.fn();

    render(
      <Router>
        <SignUp />
      </Router>
    );

    // Fill the form with valid data
    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Age"), {
      target: { value: "25" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email address"), {
      target: { value: "johndoe@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Confirm Password"), {
      target: { value: "password123" },
    });

    // Click Sign Up button
    fireEvent.click(screen.getByText("Sign Up"));

    // Check for redirection to the success page
    await waitFor(() => {
      expect(navigateMock).toHaveBeenCalledWith("/success", {
        state: { from: "signup" },
      });
    });
  });

  test("prevents submission with age less than 18", async () => {
    render(
      <Router>
        <SignUp />
      </Router>
    );

    // Fill age field with less than 18
    fireEvent.change(screen.getByPlaceholderText("Age"), {
      target: { value: "15" },
    });

    fireEvent.click(screen.getByText("Sign Up"));

    // Expect to see the age validation error message
    expect(
      await screen.findByText("You must be at least 18 years old")
    ).toBeInTheDocument();
  });
});
