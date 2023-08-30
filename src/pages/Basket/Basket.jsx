import React, { useContext } from "react";
import "./Basket.scss";
import { useCard } from "../../context/CardContext";
import { Info } from "../../modules/Info";

function Basket() {
  const BasketCard = useContext(useCard);
  return (
    <div>
      <div className="container py-10 text-slate-700">
        <h1 className="text-4xl">Your shopping cart</h1>
        <table className="w-full my-20">
          <thead className="border-b-2 border-slate-500 flex justify-between p-2">
            <th className="w-2/5">Product</th>
            <th className="w-1/5">Quantity</th>
            <th className="w-1/5">Total</th>
            <th className="w-1/5">Action</th>
          </thead>
          <tbody>
            {BasketCard.data.length > 0 ? (
              BasketCard.data.map((item, index) => {
                return <Info key={index} item={item} />;
              })
            ) : (
              <h1>NO DATA</h1>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Basket;
