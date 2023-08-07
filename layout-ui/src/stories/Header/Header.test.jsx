import React from "react";
import { render, screen, fireEvent } from "@storybook/testing-library";
import { Header } from "./Header";

describe("Header component", () => {
  it("renders correctly with user logged in", () => {
    const user = { name: "John" };
    const onLoginMock = jest.fn();
    const onLogoutMock = jest.fn();
    const onCreateAccountMock = jest.fn();

    render(
      <Header
        user={user}
        onLogin={onLoginMock}
        onLogout={onLogoutMock}
        onCreateAccount={onCreateAccountMock}
      />
    );

    const welcomeText = screen.getByText(`Welcome, ${user.name}!`);
    const logoutButton = screen.getByText("Log out");

    expect(welcomeText).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();

    fireEvent.click(logoutButton);
    expect(onLogoutMock).toHaveBeenCalled();
  });

  it("renders correctly with user not logged in", () => {
    const onLoginMock = jest.fn();
    const onCreateAccountMock = jest.fn();

    render(
      <Header onLogin={onLoginMock} onCreateAccount={onCreateAccountMock} />
    );

    const loginButton = screen.getByText("Log in");
    const signUpButton = screen.getByText("Sign up");

    expect(loginButton).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();

    fireEvent.click(loginButton);
    fireEvent.click(signUpButton);

    expect(onLoginMock).toHaveBeenCalled();
    expect(onCreateAccountMock).toHaveBeenCalled();
  });
});
