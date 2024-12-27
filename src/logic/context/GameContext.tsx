import React, { createContext, useState, ReactNode, useContext } from "react";

interface GameContextProps {
  state: object;
  setState: React.Dispatch<React.SetStateAction<object>>;
}

const GameContext = createContext<GameContextProps | undefined>(undefined);

const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<object>({
    

  });

  return <GameContext.Provider value={{ state, setState }}>{children}</GameContext.Provider>;
};

const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};

export { GameContext, GameProvider, useGame };
