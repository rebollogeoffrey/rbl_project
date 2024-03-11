import "../../styles/tgpq/tgpq_maplocations.css";
import { Link } from "react-router-dom";
import TGPQContext from "../../contexts/tgpq/TGPQContext";
import { useContext } from "react";
import axios from "axios";
import TGPQButtonNext from "./tgpq_buttonnext";

function TGPQMapLocations() {
  const { locationsArray, setPersonMonster, idUser } = useContext(TGPQContext);
  // WARNING : DO NOT CHANGE THE ORDER OF THESE LOCATIONS, THEY ARE USED FOR THE MAP !!!
  // WARNING : The FIRST visitable MUST be the LAST location in the array so it can be deleted when visited without changes the location's index

  const getMonster = () => {
    axios
      .patch(`http://localhost:8261/person/createMonster/${idUser}`)
      .then((res) => {
        setPersonMonster(res.data);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
    console.log("locationsArray :>> ", locationsArray);
  };

  if (!locationsArray[0]) {
    return (
      <div>
        <TGPQButtonNext path="/tgpq" />
      </div>
    );
  }

  return (
    <div className="tgpq_map">
      {locationsArray.map((location, index) => {
        // If location is last of array so it's the one player has to visit next, else not clickable
        if (index === locationsArray.length - 1) {
          return (
            <Link to="/battle" className="tgpq_map_location">
              <button onClick={() => getMonster()}>
                <img src={location.imageUrl} alt={location.locationName} />
              </button>
            </Link>
          );
        } else {
          return (
            <Link to="/battle" className="tgpq_map_location">
              <button disabled>
                <img src={location.imageUrl} alt={location.locationName} />
              </button>
            </Link>
          );
        }
      })}
    </div>
  );
}
export default TGPQMapLocations;
