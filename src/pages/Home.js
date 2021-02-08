import axios from "axios";
import qs from "qs";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDebounce } from "use-debounce";
import Character from "../components/Character";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

const Home = props => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [searchItem, setSearchItem] = useState();
  const [autocomplete, setAutocomplete] = useState(false);
  const [useDebounceSearchItem] = useDebounce(searchItem, 800);
  const limit = 100;
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      let params = {
        name: useDebounceSearchItem,
        skip: (page - 1) * limit,
        limit: limit
      };

      const queryParams = qs.stringify(params);

      let url = `https://marvel-app-back.herokuapp.com/characters?${queryParams}`;
      const response = await axios.get(url);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [useDebounceSearchItem, page]);

  const handleChooseItem = item => {
    history.push(`/character/${item}`);
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
            {searchItem &&
              data.results.map((character, index) => {
                return (
                  <div key={character._id}>
                    <span onClick={() => handleChooseItem(character._id)}>
                      {character.name}
                    </span>
                    <hr />
                  </div>
                );
              })}
          </Search>
          <section className="container my-10 px-4">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {data.results.map((character, index) => {
                return (
                  <Character
                    key={character._id}
                    setBookmarkCharacter={props.setBookmarkCharacter}
                    bookmarkCharacter={props.bookmarkCharacter}
                    {...character}
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

export default Home;
