import React from "react";

const Comic = props => {
  const handleSaveItem = item => {
    const bookmark = [...item.bookmarkComic];

    if (bookmark.indexOf(item.title) === -1) {
      bookmark.push(item.title);
      item.setBookmarkComic(bookmark);
    } else {
      bookmark.splice(bookmark.indexOf(item.title), 1);
      item.setBookmarkComic(bookmark);
    }
  };

  let isFavourite = false;

  for (let i = 0; i < props.bookmarkComic.length; i++) {
    if (props.title === props.bookmarkComic[i]) {
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
