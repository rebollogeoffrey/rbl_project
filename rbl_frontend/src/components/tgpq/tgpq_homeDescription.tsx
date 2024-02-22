import "../../styles/games/games_homedescription.css";

function TGPQHomeDescription(props: { gameDescription: string }) {
  return (
    <div className="game-description-container">
      <p>{props.gameDescription}</p>
    </div>
  );
}
export default TGPQHomeDescription;
