import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Ceramic.scss";

function Ceramic({ item }) {
  useEffect(() => {
    AOS.init();
  }, []);
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
        </Link>
      </div>
    </>
  );
}

export default Ceramic;
