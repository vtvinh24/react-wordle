import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./ui/component/home/Home";
import Game from "./ui/component/game/Game";
import Leaderboard from "./ui/component/game/Leaderboard";
import NotFoundPage from "./ui/component/error/404";
import BaseLayout from "./ui/layout/BaseLayout";
import GameLayout from "./ui/layout/GameLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<BaseLayout />}
          >
            <Route
              path="home"
              element={<Home />}
            />
            <Route
              path="*"
              element={<NotFoundPage />}
            />
            <Route
              path="leaderboard"
              element={<Leaderboard />}
            />
          </Route>
          <Route
            path="/game"
            element={<GameLayout />}
          >
            <Route
              index
              element={<Game />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
