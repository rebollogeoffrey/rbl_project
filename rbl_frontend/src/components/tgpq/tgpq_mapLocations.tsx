import "../../styles/tgpq/tgpq_maplocations.css";
import { Link } from "react-router-dom";
import ImgSign from "../../assets/images/tgpq/locations/tgpq_location_direction-sign.png";
import ImgHugeForest from "../../assets/images/tgpq/locations/tgpq_location_huge-forest.png";
import ImgVillage from "../../assets/images/tgpq/locations/tgpq_location_village.png";
import ImgCave from "../../assets/images/tgpq/locations/tgpq_location_cave.png";
import ImgOldTree from "../../assets/images/tgpq/locations/tgpq_location_old-tree.png";

function TGPQMapLocations() {
  // WARNING : DO NOT CHANGE THE ORDER OF THESE LOCATIONS, THEY ARE USED FOR THE MAP !!!
  // WARNING : The FIRST visitable MUST be the LAST location in the array so it can be deleted when visited without changes the location's index
  const locationsArray = [
    {
      locationName: "Fifth: The old tree",
      imageUrl: ImgOldTree,
    },
    {
      locationName: "Fourth : Cave",
      imageUrl: ImgCave,
    },
    {
      locationName: "Third: Village",
      imageUrl: ImgVillage,
    },
    {
      locationName: "Second: Huge Forest",
      imageUrl: ImgHugeForest,
    },
    {
      locationName: "First: sign",
      imageUrl: ImgSign,
    },
  ];

  return (
    <div className="tgpq_map">
      {locationsArray.map((location, index) => {
        // If location is last of array so it's the one player has to visit next, else not clickable
        if (index === locationsArray.length - 1) {
          return (
            <Link to="/battle" className="tgpq_map_location">
              <button>
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
