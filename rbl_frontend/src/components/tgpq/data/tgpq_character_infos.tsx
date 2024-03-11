/* 
TODO : REGARDER GRAPHQL: Permettra de faire simplement la conversation de données

TODO : Update le format d'arrivée de stats avec new bdd
*/
// import heroImageURL from "../../../assets/images/tgpq/persons/heroes/tgpq_character_peasant.png";
// import monsterImageURL from "../../../assets/images/tgpq/persons/monsters/tgpq_monster_goblin.png";
// const urlImageFront = "../../../assets/images/tgpq/persons/";

export interface IItem {
  id: string;
  name: string;
  price: number;
  url_image: string;
  stat_affected: string;
  value: number;
  type: string;
  created_at: string;
  updated_at: string;
}

export interface IPersonModel {
  id: string;
  name: string;
  health_max: number;
  strength: number;
  dexterity: number;
  dodge: number;
  description: string;
  url_image: string;
  difficulty: number;
  category: string;
  created_at: string;
  updated_at: string;
}

export interface IPerson {
  id: string;
  gold: number;
  health: number;
  userId: string;
  created_at: string;
  updated_at: string;
  items?: IItem[];
  personModel: IPersonModel;
}

export interface ILocation {
  locationName: string;
  imageUrl: string;
}

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
