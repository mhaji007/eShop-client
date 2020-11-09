import React, { useEffect, useState } from "react";
import { getProductsByCount } from "../functions/product";
import ProductCard from "../components/cards/ProductCard";
import Loader from "../components/loader/Loader";
import Jumbotron from "../components/cards/Jumbotron";
import LoadingCard from "../components/cards/LoadingCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = () => {
    setLoading(true);

    getProductsByCount(20).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };

  return (
    <>
      <div>
        {loading ? <Loader /> : <Jumbotron/>}
      </div>
      <div >
        {loading ? (
          <LoadingCard count={7} />
        ) : (
        <div className="row m-0 justify-content-center ">
          {products.map((product) => (
            <div key={product._id}>

              <ProductCard product={product}/>
            </div>
          ))}
        </div>
         )}
      </div>
    </>
  );
};

export default Home;
