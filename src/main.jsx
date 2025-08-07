import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Form from "./pages/CadastroProduto/CadastroProduto";
import Contador from "./pages/Contador/Contador";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
);
