import { useEffect, useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);

  const limit = 10;

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const fetchProducts = async () => {
    const res = await API.get(`/products?limit=${limit}&skip=${page * limit}`);
    setProducts(res.data.products);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h3>Products</h3>

        <div className="row">
          {products.map((p) => (
            <div className="col-md-4 mb-3" key={p.id}>
              <div className="card p-2">
                <h5>{p.title}</h5>
                <p>₹{p.price}</p>
                <Link to={`/products/${p.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between mb-3">
          <button className="btn btn-secondary" onClick={() => setPage(page - 1)} disabled={page === 0}>
            Prev
          </button>

          <button className="btn btn-secondary" onClick={() => setPage(page + 1)}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;