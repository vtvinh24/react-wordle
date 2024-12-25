import { Link } from "react-router-dom";
import AppIcon from "../../asset/app.svg";

const Header = () => {
  return (
    <header
      id="base-header"
      className="flex justify-between items-center p-4 bg-gray-800 text-white"
    >
      <div className="flex-1">
        <img
          src={AppIcon}
          alt="Logo"
          className="h-10"
        />
      </div>
      <div className="flex-2 flex justify-between items-center">
        <nav className="space-x-4">
          <Link
            to="/home"
            className="hover:underline"
          >
            Home
          </Link>
          <Link
            to="/game/leaderboard"
            className="hover:underline"
          >
            Leaderboard
          </Link>
        </nav>
      </div>
      <div className="flex-1 text-right">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">User/Login</button>
      </div>
    </header>
  );
};

export default Header;
