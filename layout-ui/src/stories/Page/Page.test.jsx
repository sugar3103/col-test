import React from "react";
import { render, screen, fireEvent } from "@storybook/testing-library";
import { Page } from "./Page";

describe("Page component", () => {
  it("renders correctly with user logged in", () => {
    render(<Page />);

    const loginButton = screen.getByText("Log in");
    fireEvent.click(loginButton);

    const headerWelcomeText = screen.getByText("Welcome, Jane Doe!");
    const logoutButton = screen.getByText("Log out");

    expect(headerWelcomeText).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();

    fireEvent.click(logoutButton);
    const headerLoginButton = screen.getByText("Log in");
    expect(headerLoginButton).toBeInTheDocument();
  });

  it("renders correctly with user not logged in", () => {
    render(<Page />);

    const signUpButton = screen.getByText("Sign up");
    fireEvent.click(signUpButton);

    const headerWelcomeText = screen.getByText("Welcome, Jane Doe!");
    const logoutButton = screen.getByText("Log out");

    expect(headerWelcomeText).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();

    fireEvent.click(logoutButton);
    const headerLoginButton = screen.getByText("Log in");
    expect(headerLoginButton).toBeInTheDocument();
  });
});
