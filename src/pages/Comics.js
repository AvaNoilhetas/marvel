import axios from "axios";
import qs from "qs";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import Comic from "../components/Comic";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

const Comics = props => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [searchItem, setSearchItem] = useState();
  const [useDebounceSearchItem] = useDebounce(searchItem, 800);
  const [autocomplete, setAutocomplete] = useState(false);
  const limit = 100;

  useEffect(() => {
    const fetchData = async () => {
      let params = {
        title: useDebounceSearchItem,
        skip: (page - 1) * limit,
        limit: limit
      };

      const queryParams = qs.stringify(params);

      let url = `https://marvel-app-back.herokuapp.com/comics?${queryParams}`;

      const response = await axios.get(url);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [useDebounceSearchItem, page]);

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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Search
            setSearchItem={setSearchItem}
            autocomplete={autocomplete}
            setAutocomplete={setAutocomplete}
            setPage={setPage}
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
          <section className="container my-10 px-4">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
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
            </div>
            <Pagination
              total={data.count}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </section>
        </>
      )}
    </>
  );
};

export default Comics;
