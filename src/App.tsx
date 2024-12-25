import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./ui/home/Home";
import NotFoundPage from "./ui/components/error/404";
import { FC } from "react";

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;