import ReactDOM from "react-dom/client";
import App from "./services/App";
import "./styles/index.css";
import "./styles/game.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
