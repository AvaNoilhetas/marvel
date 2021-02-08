import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./../assets/images/marvel-logo.png";
import marvel from "./../assets/images/marvel.png";

const Header = () => {
  const location = useLocation();

  return (
    <header
      style={{
        backgroundImage: `url(${marvel})`
      }}
      className="container bg-no-repeat bg-cover border-b-2 border-dark sm:bg-top bg-center sm:h-96 h-80 py-5 px-0"
    >
      <div className="bg-primaryRed w-full border-t-2 border-b-2 border-dark">
        <div className="container sm:flex flex-none justify-between items-center xs:py-2 py-1">
          <Link to={"/"}>
            <img src={logo} alt="Marvel" className="sm:h-10 h-8" />
          </Link>
          <div className="flex xs:justify-end justify-between">
            <Link
              className={
                (location.pathname === "/" ? "text-shadow text-yellow " : "") +
                "font-secondary text-white sm:text-4xl text-2xl"
              }
              to={"/"}
            >
              personnages
            </Link>
            <Link
              className={
                (location.pathname === "/comics"
                  ? "text-shadow text-yellow "
                  : "") +
                "font-secondary text-white sm:text-4xl text-2xl sm:ml-5 ml-3"
              }
              to={"/comics"}
            >
              comics
            </Link>
            <Link
              className={
                (location.pathname === "/bookmarks"
                  ? "text-shadow text-yellow "
                  : "") +
                "font-secondary text-white sm:text-4xl text-2xl sm:ml-5 ml-3"
              }
              to={"/bookmarks"}
            >
              favoris
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
