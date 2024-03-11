import { useContext } from "react";
import TGPQContext from "../../contexts/tgpq/TGPQContext";
import "../../styles/tgpq/tgpq_buttonbattle.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function TGPQButtonBattle() {
  const {
    personHero,
    personMonster,
    setPersonHero,
    setPersonMonster,
    locationsArray,
  } = useContext(TGPQContext);

  const actionHero = (mode: string) => {
    axios
      .patch(
        `http://localhost:8261/person/battle/${personHero.id}/${personMonster.id}/${mode}`
      )
      .then((res) => {
        console.log("res.data :>> ", res.data);
        setPersonHero(res.data[6]);
        setPersonMonster(res.data[7]);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  };

  if (personHero.health <= 0) {
    return (
      <div className="tgpq-button-battle">
        <Link to={"/tgpq"}>
          <button className="tgpq-button-battle-defend"> LOOSE </button>
        </Link>
      </div>
    );
  } else if (personMonster.health <= 0) {
    return (
      <div className="tgpq-button-battle">
        <Link to={"/map"}>
          <button
            className="tgpq-button-battle-attack"
            onClick={() => locationsArray.pop()}
          >
            WIN
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="tgpq-button-battle">
      <button
        className="tgpq-button-battle-attack"
        onClick={() => actionHero("1")}
      >
        Attack
      </button>
      <button
        onClick={() => actionHero("0")}
        className="tgpq-button-battle-defend"
      >
        Defend
      </button>
    </div>
  );
}
