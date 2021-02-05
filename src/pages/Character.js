import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comic from "./../components/Comic";
import Loader from "./../components/Loader";

const Character = props => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-app-back.herokuapp.com/comics/${id}`
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div>
          {data.thumbnail.path && (
            <img
              src={data.thumbnail.path + "." + data.thumbnail.extension}
              alt="character"
            />
          )}
          {data.comics.map((comic, index) => {
            return (
              <Comic
                key={comic._id}
                setBookmarkComic={props.setBookmarkComic}
                bookmarkComic={props.bookmarkComic}
                {...comic}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Character;
