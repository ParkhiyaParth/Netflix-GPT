import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTION
    );
    const jsonData = await data.json();
    // console.log(jsonData.results);
    dispatch(addTopRatedMovies(jsonData.results));
  };

  useEffect(() => {
    getTopRated();
  }, []);
};

export default useTopRatedMovies;
