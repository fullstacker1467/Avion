import React, { useCallback, useState } from "react";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useCard } from "../context/CardContext";
import AOS from "aos";
import "aos/dist/aos.css";
export const ProCard = ({ item, but }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const Card = useContext(useCard);

  const [saved, setSaved] = useState(false);
  const AddBacket = useCallback(
    (index) => {
      let basketData = Card.data.find((item) => item.id == index.id);
      if (!basketData) {
        Card.setData([...Card.data, { ...index }]);
      }
    },
    [Card]
  );

  return (
    <>
      <div
        data-aos="fade-up"
        className="card rounded-md overflow-hidden bg-slate-200"
      >
        <Link to="/product" className="flex flex-col gap-2">
          <div className="overflow-hidden w-full">
            <img className="hover:scale-105 w-full" src={item.img} />
          </div>
          <div className="px-2">
            <div className="flex justify-between items-center">
              <h2 className="text-xl">{item.title}</h2>
              {!saved ? (
                <i
                  onClick={() => {
                    setSaved(!saved ? true : false);
                  }}
                  className="fa-regular fa-star text-2xl"
                ></i>
              ) : (
                <i
                  onClick={() => {
                    setSaved(!saved ? true : false);
                  }}
                  className="fa-solid fa-star text-2xl text-yellow-500"
                ></i>
              )}
            </div>
            <div className="flex justify-between items-center py-3 my-2 border-t-2 border-slate-600">
              <p className="text-md">
                Price: <span>${item.price}</span>
              </p>
              <button
                disabled={but}
                onClick={() => AddBacket(item)}
                className={` ${
                  but ? "bg-slate-400" : "bg-slate-700"
                } text-sm p-2 rounded-md text-white`}
              >
                {but ? `Added To Card` : `Add To Card`}
                {but ? (
                  <i className="fa-solid fa-check mx-2"></i>
                ) : (
                  <i className="fa-solid fa-bag-shopping mx-2"></i>
                )}
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
