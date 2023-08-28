import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="flex items-center justify-center md:p-24">
            <h1
              data-aos="fade-up"
              className="my-20 text-3xl md:text-5xl md:text-center text-slate-800"
            >
              A brand built on the love of craftmanship, quality and outstanding
              customer service
            </h1>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-2 md:p-16 flex flex-col items-start justify-between gap-8">
              <div>
                <h1 data-aos="fade-left" className="text-3xl my-5">
                  From a studio in London to a global brand with over 400
                  outlets
                </h1>
                <p data-aos="fade-left">
                  When we started Avion, the idea was simple. Make high quality
                  furniture affordable and available for the mass market.
                  Handmade, and lovingly crafted furniture and homeware is what
                  we live, breathe and design so our Chelsea boutique become the
                  hotbed for the London interior design community.
                </p>
              </div>
              <Link
                data-aos="fade-left"
                className="border-2 p-2 my-10 border-slate-800 hover:bg-slate-800 hover:text-white"
                to="/"
              >
                Get in Touch
              </Link>
            </div>
            <div data-aos="fade-left" className="w-full md:w-1/2">
              <img src="./img/a1.png" />
            </div>
          </div>
          <div className="flex flex-wrap mb-16">
            <div data-aos="fade-right" className="w-full md:w-1/2">
              <img src="./img/a2.png" />
            </div>
            <div className="w-full md:w-1/2 p-2 md:p-16 flex flex-col items-start justify-between gap-8">
              <div>
                <h1 data-aos="fade-right" className="text-3xl my-5">
                  Our service isn't just personal, it's actually hyper
                  personally exquisite
                </h1>
                <p data-aos="fade-right">
                  When we started Avion, the idea was simple. Make high quality
                  furniture affordable and available for the mass market.
                  Handmade, and lovingly crafted furniture and homeware is what
                  we live, breathe and design so our Chelsea boutique become the
                  hotbed for the London interior design community.
                </p>
              </div>
              <Link
                data-aos="fade-right"
                className="border-2 p-2 border-slate-800 hover:bg-slate-800 hover:text-white"
                to="/"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
