import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Letter } from "../../../../src/ui/component/game/Letter";

describe("Letter component", () => {
    it("renders the letter prop correctly", () => {
        render(<Letter letter="A" />);
        const letterElement = screen.getByText("A");
        expect(letterElement).toBeInTheDocument();
    });

    it("applies the correct styles", () => {
        render(<Letter letter="B" />);
        const letterElement = screen.getByText("B");
        expect(letterElement).toHaveClass("px-16 w-full bg-lime-300 border-black border-solid aspect-square border-[16px]");
    });

    it("renders different letters correctly", () => {
        render(<Letter letter="C" />);
        const letterElement = screen.getByText("C");
        expect(letterElement).toBeInTheDocument();
    });
});