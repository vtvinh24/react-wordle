import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Letter } from "./Letter";
import { useLetter } from "../../../logic/hook/useLetter";

vi.mock("../../../logic/hook/useLetter");

describe("Letter Component", () => {
  it("renders with default props", () => {
    useLetter.mockReturnValue("X");
    const { getByText } = render(<Letter />);
    const letterElement = getByText("X");
    expect(letterElement).toBeInTheDocument();
    // ignore style check
  });

  it("renders with custom letter prop", () => {
    useLetter.mockReturnValue("A");
    const { getByText } = render(<Letter letter="A" />);
    const letterElement = getByText("A");
    expect(letterElement).toBeInTheDocument();
  });
});