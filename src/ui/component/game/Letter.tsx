import React from "react";
import { useLetter } from "../../../logic/hook/useLetter";

interface LetterProps {
  letter: string;
}

export const letterBoxStyle: React.CSSProperties = {
  backgroundColor: "#545454",
  color: "#000000",
  borderWidth: "2px",
  borderColor: "#000000",
  borderStyle: "solid",
  boxShadow: "2px 2px 4px 0px #000000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100px",
  height: "100px",
  fontSize: "2rem",
  fontWeight: "bold",
  textShadow: "-1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px 1px 0 #FFFFFF",
};

export const Letter: React.FC<LetterProps> = ({ letter }) => {
  const parsedLetter = useLetter(letter);
  return <div style={letterBoxStyle}>{parsedLetter}</div>;
};
