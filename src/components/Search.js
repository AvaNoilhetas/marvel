import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Search = props => {
  const handleSearchItem = event => {
    props.setSearchItem(
      encodeURIComponent(event.target.value)
        .replace(/\(/g, "\\(")
        .replace(/\)/g, "\\)")
    );
    if (event.target.value === "") {
      props.setAutocomplete(false);
    } else {
      props.setAutocomplete(true);
    }
  };

  return (
    <div className="container -mt-20 mb-20 flex justify-end px-4">
      <div className="relative max-w-xs w-full">
        <input
          className="font-primary text-dark border-4 border-dark w-full"
          type="search"
          placeholder="Rechercher..."
          onChange={handleSearchItem}
        />
        <FontAwesomeIcon
          className="absolute right-3 top-3 text-3xl text-dark bg-white"
          icon={faSearch}
        />
        {props.autocomplete && (
          <div className="absolute bg-white max-h-28 overflow-auto border-b-4 border-l-4 border-r-4 border-dark w-full p-3">
            <div className="font-primary text-dark cursor-pointer">
              {props.children}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
