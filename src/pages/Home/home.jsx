import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Ceramic from "../../components/Ceramic/Ceramic";
import { fakeApi } from "../../MiniApi";
import { cerApi } from "../../MiniApi";
import { useEffect } from "react";
import AOS from "aos";
import "./Home.scss";
import "aos/dist/aos.css";
function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="home py-24 bg-blue-950 relative overflow-hidden">
        <div className="circle xxlarge shade1"></div>
        <div className="circle xlarge shade2"></div>
        <div className="circle large shade3"></div>
        <div className="circle mediun shade4"></div>
        <div className="circle small shade5"></div>
        <div className="container flex justify-end items-center">
          <div
            data-aos="fade-right"
            className="wrapper bg-slate-200 relative rounded-sm w-7/12 p-10 flex flex-col items-start gap-20"
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
              return <Card key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
      <div className="ceramic">
        <div className="container">
          <h1 className="m-5 text-3xl">New Ceramics</h1>
          <div className="flex flex-wrap md:flex-row md:gap-0">
            {cerApi
              .map((item, index) => {
                return <Ceramic key={index} item={item} />;
              })
              .slice(0, 4)}
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
      <div className="idea my-10">
        <div className="container flex flex-wrap">
          <div className="left w-full md:w-1/2 text-white bg-blue-950 p-10 flex flex-col justify-between items-start gap-20">
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl md:text-4xl">
                It started with a small idea
              </h1>
              <h3 className="text-sm md:text-xl">
                A global brand with local beginnings, our story begain in a
                small studio in South London in early 2014
              </h3>
            </div>
            <Link
              to={"/product"}
              className="py-3 px-7 bg-slate-200 bg-opacity-20 hover:bg-slate-600"
            >
              Veiw collection
            </Link>
          </div>
          <img className="w-full md:w-1/2" src="./img/sofa.png" />
        </div>
      </div>
      <div className="join">
        <div className="container flex justify-center items-center">
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <h1 className="text-4xl text-blue-950">
              Join the club and get the benefits
            </h1>
            <p className="text-sm">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop up stores and more
            </p>
            <div className="input-field flex bg-slate-100">
              <input
                type="text"
                placeholder="Your@gmail.com"
                className="bg-transparent py-3 px-4 outline-none"
              />
              <Link to={"/user"} className="bg-blue-950 py-3 px-4 text-white">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
