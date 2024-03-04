import { Link } from "react-router-dom";
import "../../styles/hub/hub_gameselection.css";
import { IGamesInformations } from "./data/hub_hub_informations";

function GameSelection(props: { gamesInformations: IGamesInformations[] }) {
  return (
    <div className="selection">
      <h1>Choose Your Game</h1>
      <div className="selection-container">
        {props.gamesInformations.map((game, index) => {
          let link = "/" + game.routeGame;
          // If game is NONE, then stay in hub to select a game
          if (game.routeGame === "NONE") {
            link = "/hub";
          }
          return (
            <Link to={link} className="selection-game-link">
              <div className={`selection-game game-${index}`}>
                <img src={game.imageGame} className="selection-game-img" />
                <div className="selection-game-text-container">
                  <h3 className="selection-game-name">{game.nameGame}</h3>
                  <p className="selection-game-desc"> {game.descriptionGame}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default GameSelection;
