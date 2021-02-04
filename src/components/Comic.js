import React from "react";

const Comic = props => {
  const handleSaveItem = item => {
    const bookmark = [...item.bookmarkComic];

    if (bookmark.indexOf(item._id) === -1) {
      bookmark.push(item._id);
      item.setBookmarkComic(bookmark);
    } else {
      bookmark.splice(bookmark.indexOf(item._id), 1);
      item.setBookmarkComic(bookmark);
    }
  };

  return (
    <div>
      <button type="button" onClick={() => handleSaveItem(props)}>
        fav
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
