import { useEffect, useState } from "react";
import API from "../api/api";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const res = await API.get(`/products/${id}`);
    setProduct(res.data);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p><b>Price:</b> ₹{product.price}</p>
        <p><b>Brand:</b> {product.brand}</p>
        <p><b>Category:</b> {product.category}</p>
      </div>
    </>
  );
};

export default ProductDetail;