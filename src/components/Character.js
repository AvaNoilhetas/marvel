import React from "react";

const Character = props => {
  return (
    <div>
      <img
        src={props.thumbnail.path + "." + props.thumbnail.extension}
        alt={props.name}
      />
      {props.name}
      {props.description}
    </div>
  );
};

export default Character;
