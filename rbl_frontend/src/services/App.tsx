import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "../styles/App.css";
import Footer from "../components/footer";
import NavBar from "../components/hub/navbar";

import NavBarContext from "../contexts/hub/NavbarContext";

import LoginPage from "../pages/hub/loginPage";
import HomePage from "../pages/hub/gameSelectionPage";
import StatisticPage from "../pages/hub/statisticPage";
import AccountPage from "../pages/hub/accountPage";

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
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/hub" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/statistics" element={<StatisticPage />} />
        <Route path="*" element={<HomePage />} />
        {/* TODO : add the correct route's element */}
        <Route path="/tgpq" element={<HomePage />} />
      </Routes>
      <Footer />
    </NavBarContext.Provider>
  );
}

export default App;
