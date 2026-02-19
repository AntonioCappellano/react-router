import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const { id } = useParams();

  const fetchProduct = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      console.log(res.data);
    });
  };
  useEffect(fetchProduct, []);
  return (
    <div className="container">
      <h1 className="my-3"> PRODOTTO NEL DETTAGLIO</h1>
    </div>
  );
}
