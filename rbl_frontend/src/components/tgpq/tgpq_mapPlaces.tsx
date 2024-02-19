import "../../styles/tgpq/tgpq_mapplaces.css";
import { Link } from "react-router-dom";
import ImgSign from "../../assets/images/tgpq/tgpq_place_direction-sign.png";
import ImgLove from "../../assets/images/tgpq/tgpq_place_love.webp";
import ImgThird from "../../assets/images/tgpq/tgpq_place_third.png";
import ImgIndia from "../../assets/images/tgpq/tgpq_place_india.png";
import ImgIsland from "../../assets/images/tgpq/tgpq_place_island.png";

function TGPQMapPlaces() {
  // WARNING : DO NOT CHANGE THE ORDER OF THESE PLACES, THEY ARE USED FOR THE MAP !!!
  // WARNING : The FIRST visitable MUST be the LAST place in the array so it can be deleted when visited without changes the places index
  const placesArray = [
    {
      placeName: "Fifth Island",
      imageUrl: ImgIsland,
    },
    {
      placeName: "Fourth India",
      imageUrl: ImgIndia,
    },
    {
      placeName: "Third 3rd",
      imageUrl: ImgThird,
    },
    {
      placeName: "Second love",
      imageUrl: ImgLove,
    },
    {
      placeName: "First sign",
      imageUrl: ImgSign,
    },
  ];

  return (
    <div className="tgpq_map">
      {placesArray.map((place, index) => {
        // If place is last of array so it's the one player has to visit next, else not clickable
        if (index === placesArray.length - 1) {
          return (
            <Link to="/map" className="tgpq_map_place">
              <button>
                <img src={place.imageUrl} alt={place.placeName} />
              </button>
            </Link>
          );
        } else {
          return (
            <Link to="/map" className="tgpq_map_place">
              <button disabled>
                <img src={place.imageUrl} alt={place.placeName} />
              </button>
            </Link>
          );
        }
      })}
    </div>
  );
}
export default TGPQMapPlaces;
