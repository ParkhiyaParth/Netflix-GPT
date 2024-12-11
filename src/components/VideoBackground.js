import { useSelector } from "react-redux";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";

const VideoBackground = ({ movieID }) => {
  const trailer = useSelector((store) => store.movies?.trailer);
  useGetNowPlayingMovies(movieID);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-[18/9]"
        src={"https://www.youtube.com/embed/" + trailer?.key + "?autoplay=1&mute=1&loop=1&playlist=" + trailer?.key}
        title="Video Background"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
