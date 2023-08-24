import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  const [tap, setTap] = useState(true);
  const navHandler = () => {
    setTap(!tap);
  };
  return (
    <header className="flex items-center sticky z-50 left-0 top-0 bg-slate-200">
      <div className="container flex justify-between items-center">
        <Link to={"/"} className="text-3xl">
          Avion
        </Link>
        <div className="left flex gap-[150px] items-center">
          <div className={`${tap ? "active" : null} menu flex gap-10`}>
            <Link to={"/"}>Home</Link>
            <Link to={"/product"}>Product</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/about"}>About us</Link>
          </div>
          <div className="user flex items-center gap-4 text-lg">
            <Link to={"/basket"}>
              <i className="fa-solid fa-cart-shopping text-slate-900 cursor-pointer hover:text-slate-500"></i>
            </Link>
            <Link to={"/user"}>
              <i className="fa-solid fa-user text-slate-900 cursor-pointer hover:text-slate-500"></i>
            </Link>
            <i onClick={navHandler} className="fa-solid fa-bars navhandler"></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
