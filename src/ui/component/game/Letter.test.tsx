import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { letterBoxStyle, Letter } from "./Letter";

describe("Letter Component", () => {
  it("renders a regular letter correctly", () => {
    const { getByText } = render(<Letter letter="a" />);
    const letterElement = getByText("A");
    expect(letterElement).toBeInTheDocument();
  });

  it("renders a special key correctly", () => {
    const { getByText } = render(<Letter letter="Enter" />);
    const letterElement = getByText("↵");
    expect(letterElement).toBeInTheDocument();
  });

  it("renders a function key correctly", () => {
    const { getByText } = render(<Letter letter="F1" />);
    const letterElement = getByText("F1");
    expect(letterElement).toBeInTheDocument();
  });

  it("renders a warning symbol for invalid input", () => {
    const { getByText } = render(<Letter letter=" " />);
    const letterElement = getByText("⚠");
    expect(letterElement).toBeInTheDocument();
  });

  // should probably test the style as well
});