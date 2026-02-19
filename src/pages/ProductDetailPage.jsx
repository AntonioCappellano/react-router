import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const { id } = useParams();
  console.log("sto vedendo la pagina:", id);

  return (
    <div className="container">
      <h1 className="my-3"> PRODOTTO NEL DETTAGLIO</h1>
    </div>
  );
}
