import React from "react";

const Character = props => {
  return (
    <div>
      <button type="button">fav</button>
      {props.thumbnail.path && (
        <img
          src={props.thumbnail.path + "." + props.thumbnail.extension}
          alt={props.name}
        />
      )}
      {props.name && <p>{props.name}</p>}
      {props.description && <p>{props.description}</p>}
    </div>
  );
};

export default Character;
