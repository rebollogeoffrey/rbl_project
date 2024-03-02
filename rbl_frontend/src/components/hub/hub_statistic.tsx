import "../../styles/hub/hub_statistic.css";
import { allGamesStatsForUser } from "./data/hub_hub_informations";

function Statistic() {
  const userStats = { allGamesStatsForUser };

  return (
    <div className="stat">
      <h1>Statistics</h1>
      <div className="stat-container">
        {userStats.allGamesStatsForUser.map((data) => {
          return (
            // replace all non-alphanumeric characters with an empty string and take the first 8 characters of each game's name
            <div
              className={`stat-game border-${data.game
                .replace(/[^a-zA-Z0-9]/g, "")
                .toLowerCase()
                .substring(0, 8)}`}
            >
              <h2>{data.game}</h2>
              <ul className="stat-game-list">
                <span className="stat-game-list-firstThree">
                  <li> PLAYED : {data.nbWin + data.nbLose}</li>
                  <li> WIN : {data.nbWin}</li>
                  <li> LOSE : {data.nbLose}</li>
                </span>
                <span className="stat-game-list-rest">
                  {data.gameStats.map((stat) => {
                    return (
                      <li>
                        {stat.name} : {stat.value}
                      </li>
                    );
                  })}
                </span>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Statistic;
