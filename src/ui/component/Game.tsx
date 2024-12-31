import { Outlet } from "react-router-dom";
import { useGame } from "../../logic/context/GameContext";
import { Letter } from "./game/Letter";

const Game = () => {
  const { keyPressed } = useGame();
  return (
    <div id="game">
      <h1 className="text-xl">Game</h1>
      <Letter letter={keyPressed} />
      <Outlet />
    </div>
  );
};

export default Game;
