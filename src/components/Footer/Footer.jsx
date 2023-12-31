import React from "react";
import { Link } from "react-router-dom";
import { FIcon } from "../../modules/FIcon";
import { Categor } from "../../modules/Categor";
import { AboutUs } from "../../modules/AboutUs";
import { categories } from "../../MiniApi";
import { aboutUs } from "../../MiniApi";
import { miniData } from "../../MiniApi";

import "./Footer.scss";

function Footer() {
  return (
    <>
      <footer className="bg-blue-950 pt-10 flex flex-col gap-10">
        <div className="container gap-10 md:gap-0 py-10 flex flex-wrap justify-between items-center bg-blue-950">
          <ul className="text-slate-300 flex flex-col gap-2 w-full md:w-1/3">
            <h2 className="text-2xl cursor-default">Categories</h2>
            {categories.map((item, index) => {
              return <Categor key={index} item={item} />;
            })}
          </ul>
          <ul className="text-slate-300 flex flex-col gap-2 w-full md:w-1/3">
            <h2 className="text-2xl cursor-default">Our Company</h2>
            {aboutUs.map((item, index) => {
              return <AboutUs key={index} item={item} />;
            })}
          </ul>
          <div
            className="input-field flex items-center text-white bg-slate-200 bg-opacity-20 w-full md:w-1/3
          justify-between"
          >
            <input
              type="text"
              placeholder="Your@gmail.com"
              className="bg-transparent py-3 px-4 outline-none w-2/3"
            />
            <Link to={"/user"} className="bg-slate-200 py-3 px-4 text-blue-950">
              Sign up
            </Link>
          </div>
        </div>
        <div className="container border-t bottom-2 text-slate-300 border-slate-300 py-5 flex-wrap flex justify-between gap-3 md:gap-0">
          <h3 className=" w-full md:w-1/2 text-center md:text-start my-2">
            Copyright 2022 Avion LTD
          </h3>
          <div className="flex gap-4 text-2xl w-full md:w-1/2 justify-center md:justify-end">
            {miniData.map((item, index) => {
              return <FIcon key={index} item={item} />;
            })}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
