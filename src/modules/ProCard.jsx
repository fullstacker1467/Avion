import React, { useCallback, useState } from "react";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useCard } from "../context/CardContext";
import AOS from "aos";
import "aos/dist/aos.css";
export const ProCard = ({ item }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const Card = useContext(useCard);
  const [active, setActive] = useState(false);
  const AddBacket = useCallback(
    (e) => {
      let abs = Card.data.find((fin) => fin.id == e.id);
      if (!abs) {
        Card.setData([...Card.data, { ...e }]);
        setActive(true);
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
              {!active ? (
                <i className="fa-regular fa-star text-2xl"></i>
              ) : (
                <i class="fa-solid fa-star text-2xl text-yellow-500"></i>
              )}
            </div>
            <div className="flex justify-between items-center py-3 my-2 border-t-2 border-slate-600">
              <p className="text-md">
                Price: <span>${item.price}</span>
              </p>
              <button
                disabled={active}
                onClick={() => AddBacket(item)}
                className={` ${
                  active ? "bg-blue-950" : "bg-slate-700"
                } text-sm p-2 rounded-md text-white`}
              >
                {active ? `Added To Card` : `Add To Card`}
                {active ? (
                  <i class="fa-solid fa-check mx-2"></i>
                ) : (
                  <i class="fa-solid fa-bag-shopping mx-2"></i>
                )}
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
