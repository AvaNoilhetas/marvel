import React from "react";

const Comic = props => {
  const handleSaveItem = item => {
    const bookmark = [...item.bookmarkComic];
    let findItem = bookmark.find(o => o._id === item._id);
    if (findItem) {
      bookmark.splice(bookmark.indexOf(findItem), 1);
      item.setBookmarkComic(bookmark);
    } else {
      bookmark.push({
        _id: item._id,
        title: item.title,
        thumbnail: {
          path: item.thumbnail.path,
          extension: item.thumbnail.extension
        },
        description: item.description
      });
      item.setBookmarkComic(bookmark);
    }
  };

  let isFavourite = false;

  for (let i = 0; i < props.bookmarkComic.length; i++) {
    if (props._id === props.bookmarkComic[i]._id) {
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
