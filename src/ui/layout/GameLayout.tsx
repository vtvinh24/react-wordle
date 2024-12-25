import { Outlet } from "react-router-dom";

const GameLayout = () => {
  return (
    <div id="game-layout">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default GameLayout;
