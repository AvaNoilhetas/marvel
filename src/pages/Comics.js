import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Comic from "../components/Comic";
import Loader from "../components/Loader";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let url = "https://marvel-app-back.herokuapp.com/comics";
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
          {data.results.map((comic, index) => {
            return (
              <Link key={comic._id} to={`/comic/${comic._id}`}>
                <Comic {...comic} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Comics;
