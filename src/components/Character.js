import React from "react";
import { Link } from "react-router-dom";

const Character = props => {
  const handleSaveItem = item => {
    const bookmark = [...item.bookmarkCharacter];
    let findItem = bookmark.find(o => o.id === item._id);
    if (findItem) {
      bookmark.splice(bookmark.indexOf(findItem), 1);
      item.setBookmarkCharacter(bookmark);
    } else {
      bookmark.push({
        id: item._id,
        name: item.name,
        thumbnail: item.thumbnail.path,
        extension: item.thumbnail.extension
      });
      item.setBookmarkCharacter(bookmark);
    }
  };

  let isFavourite = false;

  for (let i = 0; i < props.bookmarkCharacter.length; i++) {
    if (props._id === props.bookmarkCharacter[i].id) {
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
