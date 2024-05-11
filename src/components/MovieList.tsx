import React from "react";
import { useParams } from "react-router-dom";
import Poster from "./Poster";
import data from "../data/movieCover.json";

interface MovieListProps {
  genre?: string;
}
interface Movie {
  movieName: string;
  imageUrl: string;
}

const MovieList: React.FC<MovieListProps> = ({ genre }) => {
  // Filter movies based on the provided movieName
  const filteredMovies: Movie[] = data.filter(
    (movie) => movie.movieName === "s"
  );

  return (
    <>
      {/* <div className="my-2">
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-7 place-items-center px-3 my-2">
            {filteredMovies.map((movie, index) => (
              <Poster
                key={index}
                movieName={movie.movieName}
                imageUrl={movie.imageUrl}
              />
            ))}
          </div>
        ) : (
          <span>Data not found</span>
        )}
      </div> */}
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
    </>
  );
};

export default MovieList;
