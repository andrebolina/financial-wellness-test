import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";

import Score from "./score";

describe("Score", () => {
  let mockOnReturn;
  let formValues;

  beforeEach(() => {
    mockOnReturn = jest.fn();
    formValues = { annualIncome: 1000, monthlyCosts: 10 };
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => ({ score: "HEALTHY" }),
      })
    );
  });

  it("should render", async () => {
    act(() => {
      render(<Score onReturn={mockOnReturn} formValues={formValues} />);
    });

    await waitFor(() => {
      expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Return" })).toBeInTheDocument();
    });
  });

  it("should render result", async () => {
    act(() => {
      render(<Score onReturn={mockOnReturn} formValues={formValues} />);
    });

    await waitFor(() => {
      expect(screen.getByText("Congratulations!")).toBeInTheDocument();
      expect(
        screen.getByText(/Your financial wellness score is/)
      ).toBeInTheDocument();
      expect(screen.getByText("Healthy")).toBeInTheDocument();
    });
  });

  it("should call onReturn", async () => {
    act(() => {
      render(<Score onReturn={mockOnReturn} formValues={formValues} />);
    });

    await waitFor(() => {
      const button = screen.getByRole("button", { name: "Return" });
      fireEvent.click(button);
      expect(mockOnReturn).toHaveBeenCalled();
    });
  });
});
