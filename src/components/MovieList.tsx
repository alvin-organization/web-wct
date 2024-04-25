import { LabelCategory } from "./Label";
import Poster from "./Poster";
import data from "../data/movieCover.json";
const MovieList = () => {
  return (
    <div className="my-2">
      <div className="grid grid-cols-7 place-items-center px-3 my-2">
        {data.map((movie, index) => (
          <Poster
            key={index}
            movieName={movie.movieName}
            imageUrl={movie.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
