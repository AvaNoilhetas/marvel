import axios from "axios";
import qs from "qs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";
import Character from "../components/Character";
import Loader from "../components/Loader";
import Search from "../components/Search";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [searchItem, setSearchItem] = useState();
  const [useDebounceSearchItem] = useDebounce(searchItem, 2000);

  useEffect(() => {
    const fetchData = async () => {
      let params = {
        name: useDebounceSearchItem
      };

      const queryParams = qs.stringify(params);

      let url = `https://marvel-app-back.herokuapp.com/characters?${queryParams}`;
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
        <div>
          <Search setSearchItem={setSearchItem} />
          {data.results.map((character, index) => {
            return (
              <Link key={character._id} to={`/character/${character._id}`}>
                <Character {...character} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;
