import { createContext } from "react";
import {
  ILocation,
  IPerson,
} from "../../components/tgpq/data/tgpq_character_infos";

import ImgSign from "../../assets/images/tgpq/locations/tgpq_location_direction-sign.png";
import ImgHugeForest from "../../assets/images/tgpq/locations/tgpq_location_huge-forest.png";
import ImgVillage from "../../assets/images/tgpq/locations/tgpq_location_village.png";
import ImgCave from "../../assets/images/tgpq/locations/tgpq_location_cave.png";
import ImgOldTree from "../../assets/images/tgpq/locations/tgpq_location_old-tree.png";

type TGPQContent = {
  personHero: IPerson;
  setPersonHero: (c: IPerson) => void;
  personMonster: IPerson;
  setPersonMonster: (c: IPerson) => void;
  idUser: string;
  locationsArray: ILocation[];
  setLocationsArray: (c: ILocation[]) => void;
};

const TGPQContext = createContext<TGPQContent>({
  personHero: {
    id: "1",
    gold: 100,
    health: 100,
    userId: "0",
    created_at: "2024-03-06T15:34:23.690Z",
    updated_at: "2024-03-06T15:34:23.690Z",
    personModel: {
      id: "1",
      name: "Jon",
      health_max: 100,
      strength: 100,
      dexterity: 100,
      dodge: 100,
      description: "Description",
      url_image: "Image",
      difficulty: 100,
      category: "Hero",
      created_at: "2024-03-06T15:34:23.690Z",
      updated_at: "2024-03-06T15:34:23.690Z",
    },
  },
  setPersonHero: () => {},
  personMonster: {
    id: "1",
    gold: 100,
    health: 100,
    userId: "0",
    created_at: "2024-03-06T15:34:23.690Z",
    updated_at: "2024-03-06T15:34:23.690Z",
    personModel: {
      id: "1",
      name: "Jon",
      health_max: 100,
      strength: 100,
      dexterity: 100,
      dodge: 100,
      description: "Description",
      url_image: "Image",
      difficulty: 100,
      category: "Hero",
      created_at: "2024-03-06T15:34:23.690Z",
      updated_at: "2024-03-06T15:34:23.690Z",
    },
  },
  setPersonMonster: () => {},
  idUser: "c90e1467-a6d7-4a75-b666-c86a0e29e7a2",
  locationsArray: [
    {
      locationName: "Fifth: The old tree",
      imageUrl: ImgOldTree,
    },
    {
      locationName: "Fourth : Cave",
      imageUrl: ImgCave,
    },
    {
      locationName: "Third: Village",
      imageUrl: ImgVillage,
    },
    {
      locationName: "Second: Huge Forest",
      imageUrl: ImgHugeForest,
    },
    {
      locationName: "First: sign",
      imageUrl: ImgSign,
    },
  ],
  setLocationsArray: () => {},
});

export default TGPQContext;
