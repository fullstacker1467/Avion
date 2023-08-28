import React, { useCallback, useState } from "react";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCard } from "../context/CardContext";
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
  const RemoveBasket = (e) => {
    let abc = Card.data.filter((item) => item.id !== e.id);
    console.log(abc);
  }
  return (
    <>
      <div
        data-aos="fade-up"
        className="card w-1/2 sm:w-1/2 lg:w-1/4 md:justify-between p-5"
      >
        <Link to="/product" className="flex flex-col gap-2">
          <img src={item.img} />
          <h2 className="text-xl">{item.title}</h2>
          <p className="text-sm">$ {item.price}</p>
          <div className="grid grid-cols-2 gap-3">
            <button
              disabled={active}
              onClick={() => AddBacket(item)}
              className={` ${
                active ? "bg-slate-500" : "bg-slate-700"
              } text-sm py-3 rounded-md text-white `}
            >
              {active ? "Saved" : "Add to card"}
            </button>
            {active && (
              <button
                onClick={() => RemoveBasket(item)}
                className="text-sm py-3 rounded-md text-white bg-red-700"
              >
                Delete
              </button>
            )}
          </div>
        </Link>
      </div>
    </>
  );
};
