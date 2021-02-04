import React from "react";

const Search = props => {
  const handleSearchItem = event => {
    props.setSearchItem(event.target.value);
  };

  return (
    <input type="search" placeholder="Rechercher" onChange={handleSearchItem} />
  );
};

export default Search;
