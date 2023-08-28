import React, { useContext } from "react";
import "./Product.scss";
import { cerApi } from "../../MiniApi";
import { ProCard } from "../../modules/ProCard";
import { useCard } from "../../context/CardContext";

function Product() {
  const Card = useContext(useCard);
  // console.log(Card.data);
  return (
    <>
      <div className="product">
        <div className="container">
          <div className="flex h-[150px] justify-center items-center">
            <h1 className="text-4xl">All products</h1>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full md:w-1/2 flex flex-wrap flex-col md:flex-row px-5 gap-12 my-12">
              <button>Furniture</button>
              <button>Homeware</button>
              <button>Sofas</button>
              <button>Light fittings</button>
              <button>Accessories</button>
            </div>
            <div className="w-full md:w-1/2 flex gap-4 items-center border-2 border-slate-500 p-2 rounded-md">
              <i className="fa-solid fa-magnifying-glass w-[15px]"></i>
              <input
                className="outline-none w-11/12"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-20">
            {cerApi.map((item, index) => {
              return <ProCard key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
