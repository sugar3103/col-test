import React from "react";
import { render, screen, fireEvent } from "@storybook/testing-library";
import { Button } from "./Button";

describe("Button component", () => {
  it("renders correctly with default props", () => {
    render(<Button label="Click me" />);
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("storybook-button--medium");
  });

  it("renders with specified size and primary style", () => {
    render(
      <Button label="Submit" size="large" primary backgroundColor="blue" />
    );
    const buttonElement = screen.getByText("Submit");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("storybook-button--large");
    expect(buttonElement).toHaveClass("storybook-button--primary");
    expect(buttonElement).toHaveStyle("background-color: blue");
  });

  it("calls onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    render(<Button label="Click me" onClick={onClickMock} />);
    const buttonElement = screen.getByText("Click me");

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });
});
