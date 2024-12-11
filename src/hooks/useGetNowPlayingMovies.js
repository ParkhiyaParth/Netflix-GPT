import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { getNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useGetNowPlayingMovies = (movieID) => {
  const dispatch = useDispatch();
  const videoSource = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieID +
        "/videos?language=en-US",
      API_OPTION
    );
    const json = await data.json();
    // console.log(json);

    const videoTrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const OGTrailer = videoTrailer[0];
    dispatch(getNowPlayingMovies(OGTrailer));
  };

  useEffect(() => {
    videoSource();
  }, []);
};

export default useGetNowPlayingMovies;
