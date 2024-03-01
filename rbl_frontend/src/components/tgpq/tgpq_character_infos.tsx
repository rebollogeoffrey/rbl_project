/* 
TODO : Grab real data from database

TODO : REGARDER GRAPHQL: Permettra de faire simplement la conversation de données

TODO : Update le format d'arrivée de stats avec new bdd
*/

import heroImageURL from "../../assets/images/tgpq/persons/heroes/tgpq_character_peasant.png";
import monsterImageURL from "../../assets/images/tgpq/persons/monsters/tgpq_monster_goblin.png";

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
    name: "Peasant Luciana",
    health_max: 140,
    health_actual: 120,
    strengh: 70,
    dexterity: 20,
    dodge: 40,
    description: "I will kick your ass, again",
    url_image: heroImageURL,
  },
  {
    name: "Macronnista",
    health_max: 12000,
    health_actual: 11937,
    strengh: 90,
    dexterity: 10,
    dodge: 9000,
    description: "Stay under my foot you poor",
    url_image: monsterImageURL,
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

// ---------------------------------------------
// ---------------------------------------------
// HUB'S RELATED INFORMATIONS
// ---------------------------------------------
// ---------------------------------------------
