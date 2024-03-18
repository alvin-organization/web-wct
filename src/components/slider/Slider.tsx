import { FC } from "react";
import { FaTv } from "react-icons/fa";
import "./Silder.scss";

interface SliderGroupProps {
  imageUrl: string;
  title: string;
  description: string;
  genre: string;
  duration: string;
  releaseYear: string;
  imdb: string;
}

export const SliderGroup: FC<SliderGroupProps> = ({
  imageUrl,
  title,
  description,
  genre,
  duration,
  releaseYear,
  imdb,
}) => {
  return (
    <div className="silder-group">
      <a href="moviewatch">
        <img className="silder-image" src={imageUrl} alt={title} />
      </a>
      <div className="silder-over-image">
        <span className="silder-over-title">{title}</span>
        <span className="silder-over-text">{description}</span>
        <div className="silder-over-box">
          <span className="box-title">
            Genre : <a href="#">{genre}</a>
          </span>
          <span className="box-title">
            Duration: <span>{duration}</span>
          </span>
          <span className="box-title">
            Release: <span>{releaseYear}</span>
          </span>
          <span className="box-title">
            IMDB: <span className="sub-imbs">{imdb}</span>
          </span>
        </div>
        <a href="moviewatch" className="btn-watch">
          <FaTv style={{ marginRight: "8px" }} /> Watching Now
        </a>
      </div>
    </div>
  );
};
