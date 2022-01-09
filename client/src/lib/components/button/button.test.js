import { fireEvent, render, screen } from "@testing-library/react";

import Button from "./button";

describe("Button", () => {
  let mockOnClick;

  beforeEach(() => {
    mockOnClick = jest.fn();
  });

  it("should render with default props", () => {
    render(<Button>Test Button</Button>);

    const button = screen.getByRole("button", { name: "Test Button" });
    fireEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it("should call onClick", () => {
    render(<Button onClick={mockOnClick}>Test Button</Button>);

    const button = screen.getByRole("button", { name: "Test Button" });
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
