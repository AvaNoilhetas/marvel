import React from "react";

const Comic = props => {
  return (
    <div>
      <button type="button">fav</button>
      <img
        src={props.thumbnail.path + "." + props.thumbnail.extension}
        alt={props.title}
      />
      <p>{props.title}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default Comic;
