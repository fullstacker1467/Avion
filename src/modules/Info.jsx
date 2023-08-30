import React, { useCallback, useState } from "react";

export const Info = ({ item }) => {
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
      <tr className="flex justify-between my-4 items-center">
        <td className="flex gap-3 w-2/5">
          <img src={item.img} className="w-[100px]" />
          <div className="flex flex-col justify-between">
            <h1 className="text-2xl">{item.title}</h1>
            <p>{item.body}</p>
            <h2 className="text-xl">$ {item.price}</h2>
          </div>
        </td>
        <td className="w-1/5 text-xl flex gap-3 justify-center items-center">
          <i
            onClick={dicrement}
            className="fa-regular fa-square-minus cursor-pointer"
          ></i>
          <span className="text-xl">{quantity}</span>
          <i
            onClick={increment}
            className="fa-regular fa-square-plus cursor-pointer"
          ></i>
        </td>
        <td className="w-1/5 text-xl text-center">${iprice}</td>
        <td className="w-1/5 text-xl text-center">
          <i className="fa-solid fa-trash-can cursor-pointer"></i>
        </td>
      </tr>
    </>
  );
};
