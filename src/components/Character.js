import React from "react";
import { Link } from "react-router-dom";

const Character = props => {
  const handleSaveItem = item => {
    const bookmark = [...item.bookmarkCharacter];

    if (bookmark.indexOf(item.name) === -1) {
      bookmark.push(item.name);
      item.setBookmarkCharacter(bookmark);
    } else {
      bookmark.splice(bookmark.indexOf(item.name), 1);
      item.setBookmarkCharacter(bookmark);
    }
  };

  let isFavourite = false;

  for (let i = 0; i < props.bookmarkCharacter.length; i++) {
    if (props.name === props.bookmarkCharacter[i]) {
      isFavourite = true;
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => handleSaveItem(props)}
        className={isFavourite ? "bg-red" : "bg-primary"}
      >
        fav : {props._id}
      </button>
      <Link to={`/character/${props._id}`}>
        {props.thumbnail.path && (
          <img
            src={props.thumbnail.path + "." + props.thumbnail.extension}
            alt={props.name}
          />
        )}
        {props.name && <p>{props.name}</p>}
        {props.description && <p>{props.description}</p>}
      </Link>
    </div>
  );
};

export default Character;
