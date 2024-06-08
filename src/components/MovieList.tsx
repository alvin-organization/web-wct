import React, { useEffect, useState } from "react";
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

  const [message, setMessage] = useState<string>();
  const [movies, setMovies] = useState<any>([]);

  const fetchMovies = async (): Promise<void> => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/movies", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!data.success) {
        setMessage(data.message);
        return;
      }

      setMovies(data.movies);
    } catch (error) {
      setMessage("");
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

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
          {/* {data.map((movie, index) => (
            <Poster
              key={index}
              movieName={movie.movieName}
              imageUrl={movie.imageUrl}
            />
          ))} */}
          {movies?.map((movie: any) => (
            <Poster
              id={movie.id}
              key={movie.id}
              movieName={movie.title}
              imageUrl={movie.poster_image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
