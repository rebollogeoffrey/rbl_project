import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "../styles/App.css";
import Footer from "../components/general/general_footer";
import NavBar from "../components/hub/hub_navbar";

import NavBarContext from "../contexts/hub/NavbarContext";

import LoginPage from "../pages/hub/hub_loginPage";
import GameSelectionPage from "../pages/hub/hub_gameSelectionPage";
import StatisticPage from "../pages/hub/hub_statisticPage";
import AccountPage from "../pages/hub/hub_accountPage";
import TGPQHomePage from "../pages/tgpq/tgpq_homePage";
// import ButtonBackToHub from "../components/games/buttonbacktohub";
import TGPQCharacterSelectionPage from "../pages/tgpq/tgpq_characterSelectionPage";
import TGPQMapPage from "../pages/tgpq/tgpq_mapPage";
import TGPQBattlePage from "../pages/tgpq/tgpq_battlePage";
import TGPQContext from "../contexts/tgpq/TGPQContext";
import {
  ILocation,
  IPerson,
} from "../components/tgpq/data/tgpq_character_infos";
import ImgSign from "../assets/images/tgpq/locations/tgpq_location_direction-sign.png";
import ImgHugeForest from "../assets/images/tgpq/locations/tgpq_location_huge-forest.png";
import ImgVillage from "../assets/images/tgpq/locations/tgpq_location_village.png";
import ImgCave from "../assets/images/tgpq/locations/tgpq_location_cave.png";
import ImgOldTree from "../assets/images/tgpq/locations/tgpq_location_old-tree.png";

function App() {
  const [modalMenu, setModalMenu] = useState(false);
  const idUser: string = "c90e1467-a6d7-4a75-b666-c86a0e29e7a2";
  const [locationsArray, setLocationsArray] = useState<ILocation[]>([
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
  ]);
  const [personHero, setPersonHero] = useState<IPerson>({
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
  });
  const [personMonster, setPersonMonster] = useState<IPerson>({
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
  });

  {
    /* TODO : Decomment when token in enable */
  }

  // if (!token) {
  //   return <LoginPage />;
  // }

  return (
    <NavBarContext.Provider value={{ modalMenu, setModalMenu }}>
      <TGPQContext.Provider
        value={{
          personHero,
          personMonster,
          setPersonHero,
          setPersonMonster,
          idUser,
          locationsArray,
          setLocationsArray,
        }}
      >
        <NavBar />
        {/* TODO : Handle switch logo menu 
      <ButtonBackToHub />*/}
        <Routes>
          {/* ----- Routes for Hub ----- */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/hub" element={<GameSelectionPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/statistics" element={<StatisticPage />} />
          <Route path="*" element={<GameSelectionPage />} />

          {/* ----- Routes for TGPQ ----- */}

          <Route path="/tgpq" element={<TGPQHomePage />} />
          <Route path="/map" element={<TGPQMapPage />} />
          <Route path="/battle" element={<TGPQBattlePage />} />
          <Route
            path="/selectCharacter"
            element={<TGPQCharacterSelectionPage />}
          />
        </Routes>
        <Footer />
      </TGPQContext.Provider>
    </NavBarContext.Provider>
  );
}

export default App;
