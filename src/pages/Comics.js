import axios from "axios";
import qs from "qs";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import Comic from "../components/Comic";
import Loader from "../components/Loader";
import Search from "../components/Search";

const Comics = props => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [searchItem, setSearchItem] = useState();
  const [useDebounceSearchItem] = useDebounce(searchItem, 800);
  const [autocomplete, setAutocomplete] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let params = {
        title: useDebounceSearchItem
      };

      const queryParams = qs.stringify(params);

      let url = `https://marvel-app-back.herokuapp.com/comics?${queryParams}`;

      const response = await axios.get(url);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [useDebounceSearchItem]);

  const handleChooseItem = item => {
    setSearchItem(
      encodeURIComponent(item)
        .replace(/\(/g, "\\(")
        .replace(/\)/g, "\\)")
    );
    setAutocomplete(false);
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Search
            setSearchItem={setSearchItem}
            autocomplete={autocomplete}
            setAutocomplete={setAutocomplete}
          >
            {data.results.map((comic, index) => {
              return (
                <div key={comic._id}>
                  <span onClick={() => handleChooseItem(comic.title)}>
                    {comic.title}
                  </span>
                  <hr />
                </div>
              );
            })}
          </Search>
          <section className="container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 my-10 px-4">
            {data.results.map((comic, index) => {
              return (
                <Comic
                  key={comic._id}
                  setBookmarkComic={props.setBookmarkComic}
                  bookmarkComic={props.bookmarkComic}
                  {...comic}
                />
              );
            })}
          </section>
        </>
      )}
    </>
  );
};

export default Comics;
