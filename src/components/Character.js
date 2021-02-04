import React from "react";

const Character = props => {
  return (
    <div>
      <button type="button">fav</button>
      <img
        src={props.thumbnail.path + "." + props.thumbnail.extension}
        alt={props.name}
      />
      <p>{props.name}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default Character;
