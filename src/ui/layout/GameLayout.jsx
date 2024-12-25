import { Outlet } from "react-router-dom";

const GameLayout = () => {
  return (
    <div>
      <header>Game Layout Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Game Layout Footer</footer>
    </div>
  );
};

export default GameLayout;
