import React from "react";
import { Link } from "react-router-dom";
import { ALink } from "../../modules/Link";
import "./Footer.scss";
const icons = [
  "fa-brands fa-linkedin",
  "fa-brands fa-instagram",
  "fa-brands fa-square-facebook",
  "fa-brands fa-skype",
  "fa-brands fa-twitter",
  "fa-brands fa-pinterest",
];

function Footer() {
  return (
    <>
      <footer className="bg-blue-950 pt-10 flex flex-col gap-10">
        <div className="container gap-10 md:gap-0 py-10 flex flex-wrap justify-between items-center bg-blue-950">
          <ul className="text-slate-300 flex flex-col gap-2 w-full md:w-1/3">
            <h2 className="text-2xl cursor-default">Categories</h2>
            <Link>Furniture</Link>
            <Link>Homeware</Link>
            <Link>Plant pots</Link>
            <Link>Chairs</Link>
          </ul>
          <ul className="text-slate-300 flex flex-col gap-2 w-full md:w-1/3">
            <h2 className="text-2xl cursor-default">Our Company</h2>
            <Link>About us</Link>
            <Link>Vacancies</Link>
            <Link>Contact us</Link>
            <Link>Privacy</Link>
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
            {icons.map((item, index) => {
              return <ALink key={index} item={item} />;
            })}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
