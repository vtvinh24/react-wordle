import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div>
      <header>Base Layout Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Base Layout Footer</footer>
    </div>
  );
};

export default BaseLayout;
