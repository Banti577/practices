import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UsersProvider from "./contexts/UserContext";
import ThemeProvider from "./contexts/themeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UsersProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </UsersProvider>
  </StrictMode>
);
