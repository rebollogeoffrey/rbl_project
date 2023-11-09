import ReactDOM from "react-dom/client";
import App from "./services/App";
import "./styles/hub/hub.css";
import "./styles/hub/hub_games.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
