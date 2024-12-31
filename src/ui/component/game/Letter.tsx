import React from "react";
import { useLetter } from "../../../logic/hook/useLetter";

interface LetterProps {
  letter: string;
}

export const Letter: React.FC<LetterProps> = ({ letter = "X" }) => {
  const parsedLetter = useLetter(letter);

  const mockBgColor = "#545454";
  const mockFgColor = "#000000";
  const borderWidth = "2px";
  const borderColor = "#000000";
  const borderStyle = "solid";
  const shadowColor = "#000000";
  const shadowOffset = "2px";
  const shadowBlur = "4px";
  const shadowSpread = "0px";
  const textOutlineColor = "#FFFFFF"; // Outline color
  const textOutlineWidth = "1px"; // Outline width

  const boxStyle: React.CSSProperties = {
    backgroundColor: mockBgColor,
    color: mockFgColor,
    borderWidth: borderWidth,
    borderColor: borderColor,
    borderStyle: borderStyle,
    boxShadow: `${shadowOffset} ${shadowOffset} ${shadowBlur} ${shadowSpread} ${shadowColor}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100px",
    height: "100px",
    fontSize: "2rem",
    fontWeight: "bold",
    textShadow: `-${textOutlineWidth} -${textOutlineWidth} 0 ${textOutlineColor}, ${textOutlineWidth} -${textOutlineWidth} 0 ${textOutlineColor}, -${textOutlineWidth} ${textOutlineWidth} 0 ${textOutlineColor}, ${textOutlineWidth} ${textOutlineWidth} 0 ${textOutlineColor}`,
  };

  return <div style={boxStyle}>{parsedLetter}</div>;
};
