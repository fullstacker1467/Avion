import React from "react";
import "./Product.scss";
import { cerApi } from "../../MiniApi";
import { ProCard } from "../../modules/ProCard";
import { useContext } from "react";
import { useCard } from "../../context/CardContext";

function Product() {
  const Card = useContext(useCard);
  return (
    <>
      <div className="product">
        <div className="container">
          <div className="flex h-[150px] justify-center items-center">
            <h1 className="text-4xl">All products</h1>
          </div>
          <div className="w-full md:w-1/2 flex gap-4 items-center border-2 border-slate-500 p-2 rounded-md">
            <i className="fa-solid fa-magnifying-glass w-[15px]"></i>
            <input
              className="outline-none w-11/12"
              type="text"
              placeholder="Search..."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-20">
            {cerApi.map((item, index) => {
              if (Card.data.find((as) => as.id == item.id)) {
                return <ProCard key={index} item={item} but={true} />;
              } else {
                return <ProCard key={index} item={item} but={false} />;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
