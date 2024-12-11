import Moviecards from "./Moviecards";

const Movielist = ({ title, movies }) => {
  if (!movies) {
    return <div>No movies available</div>;
  }

  console.log(movies);

  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <Moviecards key={movie.id} path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;
