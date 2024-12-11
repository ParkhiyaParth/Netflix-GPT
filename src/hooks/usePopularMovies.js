import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addpopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getpopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTION
    );
    const jsonData = await data.json();
    // console.log(jsonData.results);
    dispatch(addpopularMovies(jsonData.results));
  };

  useEffect(() => {
    getpopularMovies();
  }, []);
};

export default usePopularMovies;
