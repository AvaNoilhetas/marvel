import React from "react";

const Comic = props => {
  return (
    <div>
      <button type="button">fav</button>
      {props.thumbnail.path && (
        <img
          src={props.thumbnail.path + "." + props.thumbnail.extension}
          alt={props.title}
        />
      )}
      {props.title && <p>{props.title}</p>}
      {props.description && <p>{props.description}</p>}
    </div>
  );
};

export default Comic;
