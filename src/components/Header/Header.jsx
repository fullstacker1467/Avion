import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { NavItems } from "../../MiniApi";
import { NLink } from "../../modules/NLink";
import { useCard } from "../../context/CardContext";
import "./Header.scss";

function Header() {
  const Card = useContext(useCard);
  const [tap, setTap] = useState(true);
  const navHandler = () => {
    setTap(!tap);
  };
  return (
    <header className="flex items-center sticky z-50 left-0 top-0 bg-white">
      <div className="container flex justify-between items-center">
        <Link to={"/"} className="text-3xl">
          Avion
        </Link>
        <div className="left flex gap-[150px] items-center">
          <div className={`${tap ? "active" : null} menu flex gap-10`}>
            {NavItems.map((item, index) => {
              return <NLink key={index} item={item} />;
            })}
          </div>
          <div className="user flex items-center gap-4 text-lg">
            <Link className="relative" to={"/basket"}>
              <span className="absolute top-[-10px] left-[-15px] text-sm rounded-full text-white bg-blue-500 px-2">
                {Card.data.length <= 0 ? '' : Card.data.length}
              </span>
              <i className="text-2xl fa-solid fa-cart-shopping text-slate-800 cursor-pointer hover:text-slate-500"></i>
            </Link>
            <Link to={"/user"}>
              <i className="text-2xl fa-solid fa-user text-slate-800 cursor-pointer hover:text-slate-500"></i>
            </Link>
            <i
              onClick={navHandler}
              className={`${
                tap
                  ? "fa-solid fa-bars navhandler"
                  : "fa-solid fa-xmark navhandler"
              }`}
            ></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
