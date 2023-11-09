import TGPQDescription from "../../components/tgpq/tgpq_description";
import TGPQTitle from "../../components/tgpq/tgpq_title";
import TGPQLogo from "../../components/tgpq/tgpq_logo";
import TGPQButtonNext from "../../components/tgpq/tgpq_buttonnext";

function TGPQHomePage() {
  return (
    <div className="font-family-tgpq-regular bg-tgpq-home">
      <TGPQTitle />
      <TGPQLogo />
      <TGPQDescription />
      <TGPQButtonNext path="/selectCharacter" />
    </div>
  );
}

export default TGPQHomePage;
