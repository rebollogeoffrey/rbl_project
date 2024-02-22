import "../../styles/tgpq/tgpq_title.css";

export default function TGPQTitle({
  title,
  howImportant,
}: {
  title: string;
  howImportant?: number;
}) {
  if (howImportant === 1) {
    return <h1 className="tgpq-title font-family-tgpq-bold">{title}</h1>;
  }
  if (howImportant === 2) {
    return <h2 className="tgpq-title font-family-tgpq-bold">{title}</h2>;
  }
  if (howImportant === 3) {
    return <h3 className="tgpq-title font-family-tgpq-bold">{title}</h3>;
  }
  if (howImportant === 4) {
    return <h4 className="tgpq-title font-family-tgpq-bold">{title}</h4>;
  }
  if (howImportant === 5) {
    return <h5 className="tgpq-title font-family-tgpq-bold">{title}</h5>;
  }
  if (howImportant === 6) {
    return <h6 className="tgpq-title font-family-tgpq-bold">{title}</h6>;
  }
}
