import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Description from "../components/Description";

const Character = props => {
  const handleSaveItem = (e, item) => {
    e.preventDefault();
    const bookmark = [...item.bookmarkCharacter];
    let findItem = bookmark.find(o => o._id === item._id);
    if (findItem) {
      bookmark.splice(bookmark.indexOf(findItem), 1);
      item.setBookmarkCharacter(bookmark);
    } else {
      bookmark.push({
        _id: item._id,
        name: item.name,
        thumbnail: {
          path: item.thumbnail.path,
          extension: item.thumbnail.extension
        },
        extension: item.thumbnail.extension,
        description: item.description
      });
      item.setBookmarkCharacter(bookmark);
    }
  };

  let isFavourite = false;

  for (let i = 0; i < props.bookmarkCharacter.length; i++) {
    if (props._id === props.bookmarkCharacter[i]._id) {
      isFavourite = true;
    }
  }

  return (
    <div className="col-span-1 bg-white border-2 border-dark inline-block h-full">
      <Link to={`/character/${props._id}`}>
        {props.thumbnail.path && (
          <img
            className="object-contain bg-white w-full h-60"
            src={props.thumbnail.path + "." + props.thumbnail.extension}
            alt={props.name}
          />
        )}
        <div className="w-full p-2">
          <div className="flex justify-between items-start">
            {props.name && (
              <p className="font-secondary text-dark text-lg leading-6">
                {props.name}
              </p>
            )}
            <button
              type="button"
              className="z-10 ml-2"
              onClick={e => handleSaveItem(e, props)}
            >
              {isFavourite ? (
                <FontAwesomeIcon
                  className="text-3xl text-red"
                  icon={fasHeart}
                />
              ) : (
                <FontAwesomeIcon
                  className="text-3xl text-dark"
                  icon={farHeart}
                />
              )}
            </button>
          </div>
          {props.description && <Description description={props.description} />}
        </div>
      </Link>
    </div>
  );
};

export default Character;
