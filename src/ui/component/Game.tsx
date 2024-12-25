import { Outlet } from "react-router-dom";

const Game = () => {
  return (
    <div id="game">
      <Outlet />
    </div>
  );
};

export default Game;