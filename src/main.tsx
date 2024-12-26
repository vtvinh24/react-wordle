import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./logic/context/ThemeContext";
import { AuthProvider } from "./logic/context/AuthContext";
import { GameProvider } from "./logic/context/GameContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <GameProvider>
          <App />
        </GameProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
