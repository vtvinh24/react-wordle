import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

const GameContext = createContext<any>(null);

const GameProvider: React.FC = ({ children }) => {
  const [keyPressed, setKeyPressed] = useState<string>("");

  const keysToPreventDefault = [
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
    "Tab",
    "CapsLock",
    "Shift",
    "Control",
    "Alt",
    "Meta",
    "Enter",
    "Backspace",
    "Escape",
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "Insert",
    "Delete",
    "Home",
    "End",
    "PageUp",
    "PageDown",
    "NumLock",
    "ScrollLock",
    "Pause"
  ];

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (
      keysToPreventDefault.includes(event.key) ||
      (event.ctrlKey && event.key === "s") ||
      (event.altKey && event.key === "f") ||
      (event.shiftKey && event.key === "Tab") ||
      (event.metaKey && event.key === "r")
    ) {
      event.preventDefault();
    }
    setKeyPressed(event.key);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return <GameContext.Provider value={{ keyPressed }}>{children}</GameContext.Provider>;
};

const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};

export { GameContext, GameProvider, useGame };
