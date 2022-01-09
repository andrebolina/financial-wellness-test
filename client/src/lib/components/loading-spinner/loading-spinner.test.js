import { render, screen } from "@testing-library/react";

import LoadingSpinner from "./loading-spinner";

describe("LoadingSpinner", () => {
  it("should render with default props", () => {
    render(<LoadingSpinner />);
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
    expect(screen.getByTestId("loading-spinner")).toHaveStyle("width: 50px");
    expect(screen.getByTestId("loading-spinner")).toHaveStyle("height: 50px");
  });

  it("should render with custom props", () => {
    render(<LoadingSpinner size='60' />);
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
    expect(screen.getByTestId("loading-spinner")).toHaveStyle("width: 60px");
    expect(screen.getByTestId("loading-spinner")).toHaveStyle("height: 60px");
  });
});
