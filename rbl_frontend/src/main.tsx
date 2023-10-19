import ReactDOM from "react-dom/client";
import App from "./services/App";
import "./styles/hub/index.css";
import "./styles/hub/games.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
