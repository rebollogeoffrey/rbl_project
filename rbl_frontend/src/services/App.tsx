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

function App() {
  const [modalMenu, setModalMenu] = useState(false);

  {
    /* TODO : Decomment when token in enable */
  }

  // if (!token) {
  //   return <LoginPage />;
  // }

  return (
    <NavBarContext.Provider value={{ modalMenu, setModalMenu }}>
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
        <Route
          path="/selectCharacter"
          element={<TGPQCharacterSelectionPage />}
        />
      </Routes>
      <Footer />
    </NavBarContext.Provider>
  );
}

export default App;
