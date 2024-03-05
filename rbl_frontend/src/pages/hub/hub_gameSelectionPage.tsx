import GameSelection from "../../components/tgpq/hub/hub_gameselection";
import { gamesInformations } from "../../components/tgpq/hub/data/hub_hub_informations";
import HubLogo from "../../components/tgpq/hub/hub_logo";

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
