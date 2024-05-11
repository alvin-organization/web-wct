// CoverPosterMovie.tsx
import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { LinkButton } from "./Link";

interface CoverPosterMovieProps {
  imageUrl: string;
  movieName: string;
}

const Poster: React.FC<CoverPosterMovieProps> = ({ imageUrl, movieName }) => {
  return (
    <a
      href={`/movies/${movieName}/detail`}
      className="relative inline-block group "
    >
      <img
        src={imageUrl}
        alt="Movie Poster"
        className="w-40 h-60 object-cover"
      />
      <a className=" w-40 h-60 absolute top-0 opacity-0 flex flex-col justify-center items-center cursor-pointer transition-opacity group-hover:opacity-80">
        <LinkButton
          url={`/movies/${movieName}/detail`}
          icon={
            <FaPlayCircle
              fill="red"
              className="bg-transparent"
              size="32"
              // style={{
              //   backgroundColor: "transparent",
              //   fill: "red",
              //   fontSize: "32px",
              // }}
            />
          }
        />
        <h2 className="movie-name text-center text-xl text-aprimary font-bold bg-transparent">
          {movieName}
        </h2>
      </a>
    </a>
  );
};

export default Poster;
