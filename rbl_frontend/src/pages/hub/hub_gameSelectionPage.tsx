import GameSelection from "../../components/hub/hub_gameselection";
import HubLogo from "../../components/hub/hub_logo";

function GameSelectionPage() {
  return (
    <div className="font-family-hub">
      <HubLogo />
      <main>
        <GameSelection />
      </main>
    </div>
  );
}

export default GameSelectionPage;
