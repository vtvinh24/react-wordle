import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./ui/home/Home";
import NotFoundPage from "./ui/404";
function App() {
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
