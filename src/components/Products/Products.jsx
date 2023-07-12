import React, { useEffect, useState } from "react";
import { baseUrl } from "../../utils/baseUrl";
import axios from "axios";
import Product from "../Product/Product";

export default function Products() {
  const [Products, setProducts] = useState([]);
  const getAllProducts = async () => {
    let { data } = await axios.get(`${baseUrl}/products`);
    // console.log(data.result);
    setProducts(data.result);
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <Product Products={Products} />
        </div>
      </div>
    </>
  );
}
