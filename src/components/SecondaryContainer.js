import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies) || {};
  return (
    (
      <div className="bg-black">
        <div className="-mt-24 relative z-20">
          <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <Movielist title={"Popular"} movies={movies.popularMovies} />
          <Movielist
            title={"Upcoming Movies"}
            movies={movies.upcomingMovies}
          />
          <Movielist title={"Top Rated"} movies={movies.topRatedMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
