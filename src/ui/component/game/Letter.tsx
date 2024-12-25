import * as React from "react";

interface LetterProps {
  letter: string;
}

export const Letter: React.FC<LetterProps> = ({ letter }) => {
  return (
    <div className="flex flex-col text-9xl text-center text-black whitespace-nowrap max-w-[292px] shadow-[0px_0px_32px_rgba(255,0,0,0.4)]">
      <div className="px-16 w-full bg-lime-300 border-black border-solid aspect-square border-[16px]">
        {letter}
      </div>
    </div>
  );
};