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
  const [useDebounceSearchItem] = useDebounce(searchItem, 2000);

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

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Search setSearchItem={setSearchItem} />
          <section className="container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-4">
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
