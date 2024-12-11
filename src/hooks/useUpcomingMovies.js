import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTION
    );
    const jsonData = await data.json();
    // console.log(jsonData.results);
    dispatch(addUpcomingMovies(jsonData.results));
  };

  useEffect(() => {
    getUpcoming();
  }, []);
};

export default useUpcomingMovies;
