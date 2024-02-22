import GameSelection from "../../components/hub/hub_gameselection";
import { gamesInformations } from "../../components/hub/hub_hub_informations";
import HubLogo from "../../components/hub/hub_logo";

function GameSelectionPage() {
  return (
    <div className="font-family-hub">
      <HubLogo />
      <main>
        <GameSelection gamesInformations={gamesInformations} />
      </main>
    </div>
  );
}

export default GameSelectionPage;
