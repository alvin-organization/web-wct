// CoverPosterMovie.tsx.
import React from "react";
import "./Poster.scss"; // Import the CSS file for styling
import { FaPlayCircle } from "react-icons/fa";

interface CoverPosterMovieProps {
  imageUrl: string;
  movieName: string;
}

const Poster: React.FC<CoverPosterMovieProps> = ({ imageUrl, movieName }) => {
  return (
    <div className="cover-poster-movie">
      <img src={imageUrl} alt={movieName} />
      <div className="overlay">
        <div className="overlay-content">
          <FaPlayCircle />
          <span className="movie-name">{movieName}</span>
        </div>
      </div>
    </div>
  );
};

export default Poster;
