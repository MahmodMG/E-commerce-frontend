import React from "react";
import { Link } from "react-router-dom";

export default function Product({ Products }) {
  // console.log({ Products });
  return (
    <>
      {Products.map((item) => {
        // console.log(item);
        return (
          <div className="col-md-2" key={item._id}>
            <div className="product">
              <Link to={"/product-details/" + item._id}>
                <img src={item.imgCover} className="w-100" alt="" />
                <h6 className="text-main">{item.category.name}</h6>
                <p className="fw-bolder">
                  {item.title.split(" ").slice(0, 2).join(" ")}
                </p>
                <div className="d-flex justify-content-between align-content-center my-4">
                  <span>{item.price} EGP</span>
                  <div>
                    <i className="fas fa-star rating-color"></i>
                    {item.ratingAvg}
                  </div>
                </div>
              </Link>
              <button className="btn bg-main text-white w-100">
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
