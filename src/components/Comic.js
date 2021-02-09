import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Description from "../components/Description";

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
    <div className="col-span-1 bg-white border-2 border-dark block h-full">
      {props.thumbnail.path && (
        <img
          className="object-contain bg-white w-full h-60"
          src={props.thumbnail.path + "." + props.thumbnail.extension}
          alt={props.name}
        />
      )}
      <div className="w-full p-2">
        <div className="flex justify-between items-start">
          {props.title && (
            <p className="font-secondary text-dark text-lg leading-6">
              {props.title}
            </p>
          )}
          <button
            type="button"
            className="ml-2"
            onClick={() => handleSaveItem(props)}
          >
            {isFavourite ? (
              <FontAwesomeIcon className="text-3xl text-red" icon={fasHeart} />
            ) : (
              <FontAwesomeIcon className="text-3xl text-dark" icon={farHeart} />
            )}
          </button>
        </div>
        {props.description && <Description description={props.description} />}
      </div>
    </div>
  );
};

export default Comic;
