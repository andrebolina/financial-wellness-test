import { fireEvent, render, screen } from "@testing-library/react";

import WellnessTest from "./wellness-test";

describe("WellnessTest", () => {
  it("should render", () => {
    render(<WellnessTest />);

    expect(screen.getByText("financial wellness score")).toBeInTheDocument();
  });

  it("should complete flow", () => {
    render(<WellnessTest />);

    expect(screen.getByText(/Let's find out your/)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Annual income"), {
      target: { value: "1000" },
    });
    fireEvent.change(screen.getByLabelText("Monthly Costs"), {
      target: { value: "30" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Continue" }));

    expect(screen.getByText(/Here's your/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Return" }));

    expect(screen.getByText(/Let's find out your/)).toBeInTheDocument();
  });
});
