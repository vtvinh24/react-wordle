import React from "react";
import { Letter } from "./Letter";

interface WordProps {
  word: string;
}

export const Word: React.FC<WordProps> = ({ word }) => {
  if (!word) {
    throw new Error("Word cannot be an empty string");
  }

  return (
    <div className="flex space-x-2">
      {word.split("").map((letter, index) => (
        <Letter
          key={index}
          letter={letter}
        />
      ))}
    </div>
  );
};
