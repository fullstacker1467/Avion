import React from "react";
import "./Card.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Card({ item }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        className="card sm:w-full md:w-1/2 lg:w-1/4 p-5 flex flex-col gap-5"
      >
        <i className={`${item.icon} text-3xl`}></i>
        <h2 className="text-xl">{item.title}</h2>
        <p className="text-sm">{item.body}</p>
      </div>
    </>
  );
}

export default Card;
