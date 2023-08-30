import React, { useCallback, useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const Info = ({ item }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [quantity, setQuantity] = useState(item.amount);
  const [iprice, setIprice] = useState(item.price);
  const increment = useCallback(() => {
    setQuantity((quantity) => quantity + 1);
    setIprice(iprice + iprice);
  }, [setQuantity, setIprice]);
  const dicrement = useCallback(() => {
    setQuantity((quantity) => quantity - 1);
    setIprice(iprice - iprice);
  }, [setQuantity, setIprice]);
  return (
    <>
      <div
        data-aos="fade-left"
        className="flex justify-between items-center p-2 my-5 border-2 border-slate-400"
      >
        <div className="w-2/4 flex">
          <img src={item.img} className="w-[100px] mr-2" />
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-2xl">{item.title}</h1>
            <p>{item.body}</p>
            <h2 className="text-xl">$ {item.price}</h2>
          </div>
        </div>
        <div className="w-1/4 text-center flex justify-center items-center gap-3">
          <button onClick={dicrement} className="text-xl bg-slate-200 px-2">
            -
          </button>
          <span className="text-2xl">{quantity}</span>
          <button onClick={increment} className="text-xl bg-slate-200 px-2">
            +
          </button>
        </div>
        <h1 className="w-1/4 text-center">$ {iprice}</h1>
      </div>
    </>
  );
};
