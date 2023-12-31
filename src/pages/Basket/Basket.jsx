import React, { useContext } from "react";
import "./Basket.scss";
import { useCard } from "../../context/CardContext";
import { Info } from "../../modules/Info";
import { NoInfo } from "../../modules/NoInfo";

function Basket() {
  const BasketCard = useContext(useCard);
  return (
    <div className="overflow-hidden">
      <div className="container py-10 text-slate-700">
        <h1 className="text-3xl my-10">Your shopping cart</h1>
        <div className="tepa flex justify-between text-center border-b-2 border-slate-500 text-xl py-2">
          <h1 className="w-2/5">Product</h1>
          <h1 className="w-1/5">Quantity</h1>
          <h1 className="w-1/5">Total</h1>
          <h1 className="w-1/5">Action</h1>
        </div>
        {BasketCard.data.length > 0 ? (
          BasketCard.data.map((item, index) => {
            return <Info key={index} item={item} index={index} />;
          })
        ) : (
          <NoInfo />
        )}
      </div>
    </div>
  );
}

export default Basket;
