import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let url = "https://marvel-app-back.herokuapp.com/characters";
      const response = await axios.get(url);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div>
          {data.results.map((character, index) => {
            return (
              <Link key={character._id} to={`/character/${character._id}`}>
                {character.name}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;
