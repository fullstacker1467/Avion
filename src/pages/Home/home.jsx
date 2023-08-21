import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Ceramic from "../../components/Ceramic/Ceramic";
import { useEffect } from "react";
import AOS from "aos";
import "./Home.scss";
import "aos/dist/aos.css";
const id = new Date().getTime();
const fakeApi = [
  {
    id,
    icon: "fa-solid fa-truck-fast",
    title: "Next day as standard",
    body: `Order before 3pm and get your order the next day as standard`,
  },
  {
    id,
    icon: "fa-regular fa-circle-check",
    title: "Made by true artisans",
    body: `Handmade crafted goods made with real passion and craftmanship`,
  },
  {
    id,
    icon: "fa-regular fa-credit-card",
    title: "Unbeatable prices",
    body: `For our materials and quality you wont find better prices anywhere`,
  },
  {
    id,
    icon: "fa-brands fa-pagelines",
    title: "Recycled packaging",
    body: `We use 100% recycled packaging to ensure our footprint is manageable/*  */`,
  },
];
const cerApi = [
  {
    id,
    img: "./img/p1.png",
    title: "The Dandy chair",
    price: "250",
  },
  {
    id,
    img: "./img/p2.png",
    title: "Rustic Vase Set",
    price: "155",
  },
  {
    id,
    img: "./img/p3.png",
    title: "The Silky Vase",
    price: "125",
  },
  {
    id,
    img: "./img/p4.png",
    title: "The Lucy Lamp",
    price: "399",
  },
];

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="home">
        <div className="container h-full flex justify-end items-center">
          <div
            data-aos="fade-right"
            className="wrapper bg-slate-200 rounded-sm w-7/12 p-10 flex flex-col items-start gap-20"
          >
            <h1 className="text-5xl">
              Luxury homeware for people who love timeless design quality
            </h1>
            <h3>Shop the new Spring 2022 collection today</h3>
            <Link
              to={"/product"}
              className="border-2 border-slate-800 py-3 px-7 hover:bg-slate-800 hover:text-white"
            >
              View collection
            </Link>
          </div>
        </div>
      </div>
      <div className="farq my-20">
        <div className="container">
          <h1 className="text-center my-20 text-3xl">
            What makes our brand different
          </h1>
          <div className="flex flex-wrap md:flex-row md:gap-0">
            {fakeApi.map((item, index) => {
              return (
                <Card
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  body={item.body}
                  id={item.id}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="ceramic">
        <div className="container">
          <h1 className="m-5 text-3xl">New Ceramics</h1>
          <div className="flex flex-wrap md:flex-row md:gap-0">
            {cerApi.map((item, index) => {
              return (
                <Ceramic
                  key={index}
                  title={item.title}
                  img={item.img}
                  price={item.price}
                  id={item.id}
                />
              );
            })}
          </div>
          <div className="flex justify-center py-10">
            <Link
              to={"/product"}
              className="border-2 border-slate-800 py-3 px-7 hover:bg-slate-800 hover:text-white"
            >
              Veiw collection 
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
