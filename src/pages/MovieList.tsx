import { LabelCategory } from "../components/Label";
import Poster from "../components/Poster";
import data from "../data/movieCover.json";

const MovieList = () => {
  return (
    <div className="my-2">
      <LabelCategory htmlFor="popluar" textLabel="Popular" />
      <div className="grid grid-cols-7 place-items-center px-3 my-2">
        {data.map((movie, index) => (
          <Poster
            key={index}
            movieName={movie.movieName}
            imageUrl={movie.imageUrl}
          />
        ))}
        <span>Data not found</span>
      </div>
    </div>
  );
};

export default MovieList;
