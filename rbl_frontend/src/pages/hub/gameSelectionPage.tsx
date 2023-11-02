import GameSelection from "../../components/hub/gameselection";
import HubLogo from "../../components/hub/hublogo";

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
