import TGPQDescription from "../../components/tgpq/tgpq_homeDescription";
import TGPQTitle from "../../components/tgpq/tgpq_title";
import TGPQLogo from "../../components/tgpq/tgpq_logo";
import TGPQButtonNext from "../../components/tgpq/tgpq_buttonnext";
import { gamesInformations } from "../../components/hub/data/hub_hub_informations";
import "../../styles/App.css";
import { useContext, useEffect } from "react";
import axios from "axios";
import TGPQContext from "../../contexts/tgpq/TGPQContext";

import ImgSign from "../../assets/images/tgpq/locations/tgpq_location_direction-sign.png";
import ImgHugeForest from "../../assets/images/tgpq/locations/tgpq_location_huge-forest.png";
import ImgVillage from "../../assets/images/tgpq/locations/tgpq_location_village.png";
import ImgCave from "../../assets/images/tgpq/locations/tgpq_location_cave.png";
import ImgOldTree from "../../assets/images/tgpq/locations/tgpq_location_old-tree.png";

export default function TGPQHomePage() {
  const { idUser, setLocationsArray } = useContext(TGPQContext);
  useEffect(() => {
    axios
      .delete(`http://localhost:8261/person/user/${idUser}`)
      .then((res) => {
        console.log("Delete persons from user :>> ", res.data);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
    setLocationsArray([
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
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="font-family-tgpq-regular bg-tgpq-home">
      <TGPQTitle title="The Great's Peasant Quest" howImportant={1} />
      <TGPQLogo />
      <TGPQDescription gameDescription={gamesInformations[0].descriptionGame} />
      <TGPQButtonNext path="/selectCharacter" />
    </div>
  );
}
