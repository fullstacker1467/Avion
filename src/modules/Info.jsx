import React, { useCallback, useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCard } from "../context/CardContext";

export const Info = ({ item, index }) => {
  const snoop = useContext(useCard);

  useEffect(() => {
    AOS.init();
  }, []);

  const increment = useCallback(
    (index) => {
      const updatedData = [...snoop.data];
      updatedData[index].amount += 1;
      snoop.setData(updatedData);
    },
    [snoop]
  );

  const decrement = useCallback(
    (index) => {
      const updatedData = [...snoop.data];
      if (updatedData[index].amount > 1) {
        updatedData[index].amount -= 1;
        snoop.setData(updatedData);
      }
    },
    [snoop]
  );

  const del = (index) => {
    snoop.setData(snoop.data.filter((item) => item.id !== index));
  };
  return (
    <>
      <div
        data-aos="fade-left"
        className="flex justify-between items-center p-2 my-5 border-2 border-slate-400"
      >
        <div className="w-2/5 flex">
          <img src={item.img} className="w-[100px] mr-2" alt="" />
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-2xl">{item.title}</h1>
            <p>{item.body}</p>
            <h2 className="text-xl">$ {item.price}</h2>
          </div>
        </div>
        <div className="w-1/5 text-center flex justify-center items-center gap-3">
          <button
            onClick={() => decrement(index)}
            className="text-xl bg-slate-200 px-2"
          >
            -
          </button>
          <span className="text-2xl">{item.amount}</span>
          <button
            onClick={() => increment(index)}
            className="text-xl bg-slate-200 px-2"
          >
            +
          </button>
        </div>
        <h1 className="w-1/5 text-center">$ {item.price * item.amount}</h1>
        <button onClick={() => del(item.id)} className="w-1/5">
          <i className="fa-solid fa-trash text-xl"></i>
        </button>
      </div>
    </>
  );
};
