import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "../styles/App.css";
import Footer from "../components/footer";
import NavBar from "../components/hub/navbar";

import NavBarContext from "../contexts/hub/NavbarContext";

import LoginPage from "../pages/hub/loginPage";
import GameSelectionPage from "../pages/hub/gameSelectionPage";
import StatisticPage from "../pages/hub/statisticPage";
import AccountPage from "../pages/hub/accountPage";
import TGPQHomePage from "../pages/tgpq/homePage";
import ButtonBackToHub from "../components/games/buttonbacktohub";
import CharacterSelectionPage from "../pages/tgpq/characterSelectionPage";

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
      {/* TODO : Handle switch logo menu */}
      <ButtonBackToHub />
      <Routes>
        {/* ----- Routes for Hub ----- */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/hub" element={<GameSelectionPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/statistics" element={<StatisticPage />} />
        <Route path="*" element={<GameSelectionPage />} />

        {/* ----- Routes for TGPQ ----- */}
        <Route path="/tgpq" element={<TGPQHomePage />} />
        <Route path="/selectCharacter" element={<CharacterSelectionPage />} />
      </Routes>
      <Footer />
    </NavBarContext.Provider>
  );
}

export default App;
