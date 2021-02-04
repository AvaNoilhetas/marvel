import React from "react";
import { Link } from "react-router-dom";

const Character = props => {
  const handleSaveItem = item => {
    const bookmark = [...item.bookmarkCharacters];

    if (bookmark.indexOf(item._id) === -1) {
      bookmark.push(item._id);
      item.setBookmarkCharacters(bookmark);
    } else {
      bookmark.splice(bookmark.indexOf(item._id), 1);
      item.setBookmarkCharacters(bookmark);
    }
  };

  return (
    <div>
      <button type="button" onClick={() => handleSaveItem(props)}>
        fav
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
