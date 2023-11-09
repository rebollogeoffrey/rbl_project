import "../../styles/hub/hub_statistic.css";

function Statistic() {
  // const globalStat = [
  //   { nbWin: 2, nbLose: 1, game: "TGPQ" },
  //   { nbWin: 2, nbLose: 1, game: "Lootery" },
  //   { nbWin: 2, nbLose: 1, game: "Patata" },
  //   { nbWin: 2, nbLose: 1, game: "Mount" },
  //   { nbWin: 2, nbLose: 1, game: "Pouet" },
  // ];

  // const specificStat = [
  //   { nb_killed: 2, name: "WOLF", game: "TGPQ" },
  //   { nb_killed: 2, name: "GOLEM", game: "TGPQ" },
  //   { nb_killed: 2, name: "GOLEM", game: "TGPQ" },
  //   { nb_killed: 2, name: "GOLEM", game: "TGPQ" },
  //   { nb_killed: 2, name: "GOLEM", game: "TGPQ" },
  // ];

  {
    /* TODO : REGARDER GRAPHQL: Permettra de faire simplement la conversation de données
    
    TODO : Update le format d'arrivée de stats avec new bdd*/
  }

  const userStats = [
    {
      game: "The Great Peasant's Quest",
      nbWin: 2,
      nbLose: 1,
      gameStats: [
        { name: "Wolf", value: 25 },
        { name: "Golem", value: 8 },
        { name: "Blob", value: 11 },
        { name: "Revengeful Ex-Partner", value: 6 },
        { name: "Ex-Partner", value: 6 },
        { name: "Blue golem", value: 8 },
        { name: "Blob master", value: 7 },
      ],
    },
    {
      game: "Lootery-'_\"^¨$*µ£&é\"'(-è_çà=+´~#{[|`^@]}",
      nbWin: 1,
      nbLose: 0,
      gameStats: [
        { name: "Roll", value: 658 },
        { name: "Gold", value: 548211 },
      ],
    },
    {
      game: "Mount-'_\"^¨$*µ £&é\"'(-è_     çà=+´~#{[|`^@]}",
      nbWin: 1,
      nbLose: 1,
      gameStats: [],
    },
    {
      game: "Poulet vengeur",
      nbWin: 22,
      nbLose: 9,
      gameStats: [
        { name: "Camion", value: 22222 },
        { name: "Poeme", value: 62 },
      ],
    },
    {
      game: "Patata Banana",
      nbWin: 1,
      nbLose: 999,
      gameStats: [
        { name: "Water", value: 9999999999 },
        { name: "Coke", value: 3 },
        { name: "Alcohol", value: 68852 },
      ],
    },
  ];

  return (
    <div className="stat">
      <h1>Statistics</h1>
      <div className="stat-container">
        {userStats.map((data) => {
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
