/* 
TODO : Grab real data from database

TODO : REGARDER GRAPHQL: Permettra de faire simplement la conversation de données

TODO : Update le format d'arrivée de stats avec new bdd
*/

export interface ICharacterInfo {
  name: string;
  health_max: number;
  health_actual: number;
  strengh: number;
  dexterity: number;
  dodge: number;
  description: string;
  url_image: string;
}

export const characterInfos: ICharacterInfo[] = [
  {
    name: "Peasant Roger",
    health_max: 140,
    health_actual: 120,
    strengh: 70,
    dexterity: 20,
    dodge: 40,
    description: "I will kick your ass, again",
    url_image: "image.jpp",
  },
  {
    name: "Macronnista",
    health_max: 12000,
    health_actual: 11937,
    strengh: 90,
    dexterity: 10,
    dodge: 9000,
    description: "Stay under my foot you poor",
    url_image: "image.jpp",
  },
];

export const characterStats = [
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
      { name: "Syrup", value: 68852 },
    ],
  },
];
// export const globalStat = [
//   { nbWin: 2, nbLose: 1, game: "TGPQ" },
//   { nbWin: 2, nbLose: 10, game: "Lootery" },
//   { nbWin: 6, nbLose: 0, game: "Patata" },
//   { nbWin: 2, nbLose: 1, game: "Mount" },
//   { nbWin: 28, nbLose: 7, game: "Pouet" },
// ];

// export const specificStat = [
//   { nb_killed: 2, name: "WOLF", game: "TGPQ" },
//   { nb_killed: 20, name: "GOLEM", game: "TGPQ" },
//   { nb_killed: 22, name: "GOLEM", game: "TGPQ" },
//   { nb_killed: 12, name: "GOLEM", game: "TGPQ" },
//   { nb_killed: 98, name: "GOLEM", game: "TGPQ" },
// ];
