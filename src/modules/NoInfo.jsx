import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const NoInfo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        className="text-center flex flex-col justify-center items-center gap-3 text-slate-400 py-24"
      >
        <i className="text-9xl fa-solid fa-bag-shopping"></i>
        <h1 className="text-2xl text-slate-600">Your Basket Is Empty</h1>
        <p className="w-[250px] mx-auto text-sm text-slate-600">
          Choose the product you need from the catalog of the online store and
          add it to the cart``
        </p>
        <Link
          to={"/product"}
          className="border-2 rounded-md border-slate-800 py-3 px-7 bg-slate-800 text-white"
        >
          Go to catalog
        </Link>
      </div>
    </>
  );
};
