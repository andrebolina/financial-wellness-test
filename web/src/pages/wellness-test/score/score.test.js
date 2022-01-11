import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Context from "../context";
import Score from "./score";

describe("Score", () => {
  const mockFormValues = { annualIncome: 1000, monthlyCosts: 10 };
  const mockSetFormValues = jest.fn();
  const fetch = global.fetch;

  beforeEach(() => {
    global.fetch = fetch;
  });

  it("should render", () => {
    render(
      <Context.Provider value={[mockFormValues, mockSetFormValues]}>
        <Score />
      </Context.Provider>
    );

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Return" })).toBeInTheDocument();
  });

  it("should render result", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => ({ score: "HEALTHY" }),
      })
    );
    render(
      <Context.Provider value={[mockFormValues, mockSetFormValues]}>
        <Score />
      </Context.Provider>
    );
    await waitFor(() => {
      expect(screen.getByText("Congratulations!")).toBeInTheDocument();
      expect(
        screen.getByText(/Your financial wellness score is/)
      ).toBeInTheDocument();
      expect(screen.getByText("Healthy")).toBeInTheDocument();
    });
  });

  it("should call onReturn", () => {
    render(
      <Context.Provider value={[mockFormValues, mockSetFormValues]}>
        <Score />
      </Context.Provider>
    );

    const button = screen.getByRole("button", { name: "Return" });
    fireEvent.click(button);
    expect(mockSetFormValues).toHaveBeenCalled();
  });
});
