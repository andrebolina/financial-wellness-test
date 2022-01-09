import { render, screen } from "@testing-library/react";

import HealthBar from "./health-bar";

describe("HealthBar", () => {
  it("should render level 1", () => {
    render(<HealthBar level={1} />);
    expect(screen.getByTestId("level-1")).toHaveClass("level low");
    expect(screen.getByTestId("level-2")).toHaveClass("level");
    expect(screen.getByTestId("level-3")).toHaveClass("level");
  });

  it("should render level 2", () => {
    render(<HealthBar level={2} />);
    expect(screen.getByTestId("level-1")).toHaveClass("level medium");
    expect(screen.getByTestId("level-2")).toHaveClass("level medium");
    expect(screen.getByTestId("level-3")).toHaveClass("level");
  });

  it("should render level 3", () => {
    render(<HealthBar level={3} />);
    expect(screen.getByTestId("level-1")).toHaveClass("level healthy");
    expect(screen.getByTestId("level-2")).toHaveClass("level healthy");
    expect(screen.getByTestId("level-3")).toHaveClass("level healthy");
  });
});
