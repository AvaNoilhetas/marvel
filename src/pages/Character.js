import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import Carousel from "../components/Carousel";
import Comic from "./../components/Comic";
import Loader from "./../components/Loader";

const Character = props => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const description = sanitizeHtml(data.description, {
    allowedTags: [],
    allowedAttributes: {}
  });

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
          <section className="container my-10 px-4">
            <div className="sm:flex sm:space-x-4 max-w-5xl">
              <div className="col-span-1">
                {data.thumbnail.path && (
                  <img
                    className="border-2 border-dark max-h-80 w-auto mx-auto"
                    src={data.thumbnail.path + "." + data.thumbnail.extension}
                    alt={data.name}
                  />
                )}
              </div>
              <div className="col-span-1 sm:mt-0 mt-4">
                <h1 className="text-shadow text-yellow font-secondary text-white text-4xl mb-4">
                  {data.name}
                </h1>
                {data.description && (
                  <p className="text-dark font-primary leading-4 mt-2">
                    {description}
                  </p>
                )}
              </div>
            </div>
          </section>
          {data.comics.length > 1 && (
            <section className="container mb-10 px-4">
              <h1 className="text-shadow text-yellow font-secondary text-white text-4xl mb-4">
                {data.name} apparaît dans :
              </h1>

              <Carousel>
                {data.comics.map((comic, index) => {
                  return (
                    <div key={comic._id} className="w-64">
                      <Comic
                        setBookmarkComic={props.setBookmarkComic}
                        bookmarkComic={props.bookmarkComic}
                        {...comic}
                      />
                    </div>
                  );
                })}
              </Carousel>
            </section>
          )}
        </div>
      )}
    </>
  );
};

export default Character;
