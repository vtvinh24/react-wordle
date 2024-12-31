import { KeySymbol } from "../enum/Letter";

export const useLetter = (letter: string) => {
  //   const regex = /^[^\p{C}\p{Z}]+$/u;
  //   if (!regex.test(letter)) {
  //     // a warn symbol
  //     return "⚠";
  //   }

  // Check if the letter is a special key and return its symbol
  const specialKey = KeySymbol[letter as keyof typeof KeySymbol];
  if (specialKey) {
    return specialKey;
  }

  return letter.toUpperCase();
};
