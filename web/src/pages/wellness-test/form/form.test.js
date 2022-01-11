import { fireEvent, render, screen } from "@testing-library/react";

import Form from "./form";

describe("Form", () => {
  let mockSetFormValues;

  beforeEach(() => {
    mockSetFormValues = jest.fn();
  });

  it("should render", () => {
    render(<Form setFormValues={mockSetFormValues} />);

    expect(screen.getByText("Financial wellness test")).toBeInTheDocument();
    expect(
      screen.getByText("Enter your financial information below")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Continue" })).toBeInTheDocument();
  });

  it("should render errors", () => {
    render(<Form setFormValues={mockSetFormValues} />);

    fireEvent.click(screen.getByRole("button", { name: "Continue" }));

    expect(screen.queryAllByText("The value must be greater than 0")).toHaveLength(
      2
    );
    expect(mockSetFormValues).not.toHaveBeenCalled();
  });

  it("should call setFormValues", () => {
    render(<Form setFormValues={mockSetFormValues} />);

    fireEvent.change(screen.getByLabelText("Annual income"), {
      target: { value: "1000" },
    });
    fireEvent.change(screen.getByLabelText("Monthly Costs"), {
      target: { value: "30" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Continue" }));

    expect(mockSetFormValues).toHaveBeenCalled();
  });
});
