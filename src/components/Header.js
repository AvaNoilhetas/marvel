import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      logo <br />
      <Link to={"/"}>personnages</Link>
      <Link to={"/comics"}>comics</Link>
      <Link to={"/bookmarks"}>favoris</Link>
    </div>
  );
};

export default Header;
