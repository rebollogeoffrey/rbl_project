import { Link } from "react-router-dom";
import rblLogo from "../../assets/images/logo_RBL.png";
import "../../styles/hub/hub_gameselection.css";

function GameSelection() {
  const arrayTest = [
    {
      imageGame: rblLogo,
      nameGame: "The Great Peasant's Quest",
      routeGame: "tgpq",
      descriptionGame:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus tincidunt ornare arcu, at pulvinar nisl. In eget est id lectus rhoncus efficitur ac ut lorem. Phasellus egestas hendrerit urna ut consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus tincidunt ornare arcu, at pulvinar nisl. In eget est id lectus rhoncus efficitur ac ut lorem. Phasellus egestas hendrerit urna ut CONSEQUAT.",
    },
    {
      imageGame: rblLogo,
      nameGame: "Lootery",
      routeGame: "tgpq",
      descriptionGame:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at tellus vestibulum, efficitur lorem in, mattis tellus. Nullam vestibulum sem sit amet nunc faucibus, id viverra nibh pharetra. Phasellus mollis dapibus dolor, blandit scelerisque leo porttitor vel. Nam molestie odio ut dui ornare, eu suscipit nunc TINCIDUNT.",
    },
    {
      imageGame: rblLogo,
      nameGame: "Lootery",
      routeGame: "tgpq",
      descriptionGame: "LOREM",
    },
    {
      imageGame: rblLogo,
      nameGame: "Mount",
      routeGame: "tgpq",
      descriptionGame:
        "Etiam consequat erat diam, sed bibendum ex ornare id. Nulla non maximus lectus, vel mollis nisl. Suspendisse consequat urna ac dolor porta, luctus condimentum enim tempus. Aenean convallis turpis vitae mi posuere, vel teempor odio semper. Nulla mattis enim auctor nisl imperdiet viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec lacus mauris, posuere id fermentum ut, ultricies at libero. Donec lorem velit, bibendum at lacinia in, facilisis id ELIT.",
    },
    {
      imageGame: rblLogo,
      nameGame: "Patata",
      routeGame: "tgpq",
      descriptionGame:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus tincidunt ornare arcu, at pulvinar nisl. In eget est id lectus rhoncus efficitur ac ut lorem. Phasellus egestas hendrerit urna ut CONSEQUAT.",
    },
  ];
  return (
    <div className="selection">
      <h1>Choose Your Game</h1>
      <div className="selection-container">
        {arrayTest.map((game, index) => {
          const link = "/" + game.routeGame;
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
