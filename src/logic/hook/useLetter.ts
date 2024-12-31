import { KeySymbol } from "../enum/Letter";

export const useLetter = (letter: string) => {
  // Check if the letter is a special key and return its symbol
  const specialKey = KeySymbol[letter as keyof typeof KeySymbol];
  if (specialKey) {
    return specialKey;
  }

  const functionKeyRegex = /^F[1-9][0-2]?$/;
  if (functionKeyRegex.test(letter)) {
    return letter;
  }

  const regex = /^[^\p{C}\p{Z}]+$/u;
  if (!(regex.test(letter) && letter.length === 1)) {
    // a warn symbol
    return "⚠";
  }

  return letter.toUpperCase();
};
