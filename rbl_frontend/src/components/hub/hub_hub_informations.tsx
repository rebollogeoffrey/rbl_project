import LogoRBL from "../../assets/images/logo_RBL.png";
import LogoTGPQ from "../../assets/images/tgpq/tgpq_logo.png";

export interface IGamesInformations {
  imageGame: string;
  nameGame: string;
  routeGame: string;
  descriptionGame: string;
}

export const gamesInformations = [
  {
    imageGame: LogoTGPQ,
    nameGame: "The Great Peasant's Quest",
    routeGame: "tgpq",
    descriptionGame:
      "Welcome to the greatest of all great quest ! A quest of glory, of honor, of ... of ... Oh no... That's just you... That's embarassing haha...ha..ha. *Cough* *Cough* Well, erm, I guess that'll just be the story of you, a low class peasant. It's nice too, no? How will I announce that to the public now? It'll be a complete desaster ! We can't change how it is, huh? If your love for buying a new nice looking hat is huge enough, try to survive on the road to the city's market!",
  },
  {
    imageGame: LogoRBL,
    nameGame: "Lootery",
    routeGame: "tgpq",
    descriptionGame:
      "Sometimes, you may win. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at tellus vestibulum, efficitur lorem in, mattis tellus. Nullam vestibulum sem sit amet nunc faucibus, id viverra nibh pharetra. Phasellus mollis dapibus dolor, blandit scelerisque leo porttitor vel. Nam molestie odio ut dui ornare, eu suscipit nunc TINCIDUNT.",
  },
  {
    imageGame: LogoRBL,
    nameGame: "The dog show",
    routeGame: "tgpq",
    descriptionGame:
      "Curabitur at tellus vestibulum, efficitur lorem in, mattis tellus. LOREM",
  },
  {
    imageGame: LogoRBL,
    nameGame: "Mount and grass",
    routeGame: "tgpq",
    descriptionGame:
      "Etiam consequat erat diam, sed bibendum ex ornare id. Nulla non maximus lectus, vel mollis nisl. Suspendisse consequat urna ac dolor porta, luctus condimentum enim tempus. Aenean convallis turpis vitae mi posuere, vel teempor odio semper. Nulla mattis enim auctor nisl imperdiet viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec lacus mauris, posuere id fermentum ut, ultricies at libero. Donec lorem velit, bibendum at lacinia in, facilisis id ELIT.",
  },
  {
    imageGame: LogoRBL,
    nameGame: "Patata Banana",
    routeGame: "tgpq",
    descriptionGame:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus tincidunt ornare arcu, at pulvinar nisl. In eget est id lectus rhoncus efficitur ac ut lorem. Phasellus egestas hendrerit urna ut CONSEQUAT.",
  },
];

export const allGamesStatsForUser = [
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
    game: "The dog show",
    nbWin: 22,
    nbLose: 9,
    gameStats: [
      { name: "Camion", value: 22222 },
      { name: "Poeme", value: 62 },
    ],
  },
  {
    game: "Mount and grass-'_\"^¨$*µ £&é\"'(-è_     çà=+´~#{[|`^@]}",
    nbWin: 1,
    nbLose: 1,
    gameStats: [],
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
