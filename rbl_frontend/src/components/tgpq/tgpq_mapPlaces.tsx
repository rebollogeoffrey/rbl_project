import "../../styles/tgpq/tgpq_mapplaces.css";
import { Link } from "react-router-dom";
import ImgSign from "../../assets/images/tgpq/tgpq_place_direction-sign.png";
import ImgLove from "../../assets/images/tgpq/tgpq_place_love.webp";
import ImgThird from "../../assets/images/tgpq/tgpq_place_third.png";
import ImgIndia from "../../assets/images/tgpq/tgpq_place_india.png";
import ImgIsland from "../../assets/images/tgpq/tgpq_place_island.png";

function TGPQMapPlaces() {
  const placesArray = [
    {
      placeName: "First sign",
      imageUrl: ImgSign,
    },
    {
      placeName: "Second love",
      imageUrl: ImgLove,
    },
    {
      placeName: "Third 3rd",
      imageUrl: ImgThird,
    },
    {
      placeName: "Fourth India",
      imageUrl: ImgIndia,
    },
    {
      placeName: "Fifth Island",
      imageUrl: ImgIsland,
    },
  ];

  return (
    <div className="tgpq_map">
      {placesArray.map((place, index) => {
        return (
          <Link to="/map" className="tgpq_map_place">
            <button className="disabled">
              <img src={place.imageUrl} alt={place.placeName} />
            </button>
          </Link>
        );
      })}
    </div>
  );
}
export default TGPQMapPlaces;
