import "../../styles/tgpq/tgpq_maplocations.css";
import { Link } from "react-router-dom";
import ImgSign from "../../assets/images/tgpq/tgpq_location_direction-sign.png";
import ImgLove from "../../assets/images/tgpq/tgpq_location_love.webp";
import ImgThird from "../../assets/images/tgpq/tgpq_location_third.png";
import ImgIndia from "../../assets/images/tgpq/tgpq_location_india.png";
import ImgIsland from "../../assets/images/tgpq/tgpq_location_island.png";

function TGPQMapLocations() {
  // WARNING : DO NOT CHANGE THE ORDER OF THESE LOCATIONS, THEY ARE USED FOR THE MAP !!!
  // WARNING : The FIRST visitable MUST be the LAST location in the array so it can be deleted when visited without changes the location's index
  const locationsArray = [
    {
      locationName: "Fifth Island",
      imageUrl: ImgIsland,
    },
    {
      locationName: "Fourth India",
      imageUrl: ImgIndia,
    },
    {
      locationName: "Third 3rd",
      imageUrl: ImgThird,
    },
    {
      locationName: "Second love",
      imageUrl: ImgLove,
    },
    {
      locationName: "First sign",
      imageUrl: ImgSign,
    },
  ];

  return (
    <div className="tgpq_map">
      {locationsArray.map((location, index) => {
        // If location is last of array so it's the one player has to visit next, else not clickable
        if (index === locationsArray.length - 1) {
          return (
            <Link to="/map" className="tgpq_map_location">
              <button>
                <img src={location.imageUrl} alt={location.locationName} />
              </button>
            </Link>
          );
        } else {
          return (
            <Link to="/map" className="tgpq_map_location">
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
