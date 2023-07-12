import React from "react";

export default function Product({ Products }) {
  console.log({ Products });
  return (
    <>
      {Products.map((item) => {
        console.log(item);
        return (
          <div className="col-md-2" key={item._id}>
            <img src={item.imgCover} className="w-100" alt="" />
          </div>
        );
      })}
    </>
  );
}
