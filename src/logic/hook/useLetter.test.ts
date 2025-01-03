import { describe, it, expect } from "vitest";
import { useLetter } from "./useLetter";

describe("useLetter", () => {
  it("should return the function key as is", () => {
    const functionKey = "F5";
    const result = useLetter(functionKey);
    expect(result).toBe("F5");
  });

  it("should return the warn symbol for a control character", () => {
    const controlChar = "\u0000"; // Null character
    const result = useLetter(controlChar);
    expect(result).toBe("⚠");
  });

  it("should return the warn symbol for a space character", () => {
    const spaceChar = " ";
    const result = useLetter(spaceChar);
    expect(result).toBe("⚠");
  });

  it("should return the warn symbol for a multi-character string", () => {
    const multiChar = "ab";
    const result = useLetter(multiChar);
    expect(result).toBe("⚠");
  });

  it("should return the input for a non-alphabetic symbol", () => {
    const symbol = "@";
    const result = useLetter(symbol);
    expect(result).toBe("@");
  });

  it("should return the uppercase letter for a lowercase letter", () => {
    const letter = "z";
    const result = useLetter(letter);
    expect(result).toBe("Z");
  });

  it("should return the uppercase letter for an uppercase letter", () => {
    const letter = "X";
    const result = useLetter(letter);
    expect(result).toBe("X");
  });
});
