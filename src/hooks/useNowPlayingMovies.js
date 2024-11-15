import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const NowPLaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTION
    );
    const jsonData = await data.json();
    console.log(jsonData.results);
    dispatch(addNowPlayingMovies(jsonData.results));
  };

  useEffect(() => {
    NowPLaying();
  }, []);
};

export default useNowPlayingMovies;
