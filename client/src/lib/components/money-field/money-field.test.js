import { fireEvent, render, screen } from "@testing-library/react";

import MoneyField from "./money-field";

describe("MoneyField", () => {
  let mockOnChange;

  beforeEach(() => {
    mockOnChange = jest.fn();
  });

  it("should render", () => {
    render(<MoneyField onChange={mockOnChange} />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render with all props", () => {
    render(
      <MoneyField
        errorMessage="Test Error"
        label="Test Label"
        onChange={mockOnChange}
        placeholder="0"
      />
    );

    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(screen.getByRole("textbox").getAttribute("placeholder")).toBe("0");
    expect(screen.getByText("Test Error")).toBeInTheDocument();
  });

  it("should call onChange", () => {
    render(
      <MoneyField label="Test Label" onChange={mockOnChange} placeholder="0" />
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "1" } });
    expect(mockOnChange).toHaveBeenCalled();
  });
});
