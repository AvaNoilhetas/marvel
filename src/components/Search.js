import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Search = props => {
  const handleSearchItem = event => {
    props.setSearchItem(event.target.value);
  };

  return (
    <div className="container">
      <div className="text-right relative -mt-20 mb-20 ">
        <input
          className="font-primary text-dark border-4 border-dark max-w-xs w-full"
          type="search"
          placeholder="Rechercher..."
          onChange={handleSearchItem}
        />
        <FontAwesomeIcon
          className="absolute right-3 top-3 text-3xl text-dark bg-white"
          icon={faSearch}
        />
      </div>
    </div>
  );
};

export default Search;
