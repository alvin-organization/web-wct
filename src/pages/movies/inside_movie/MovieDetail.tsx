import AppLayout from "../../../layout/AppLayout";
import {
  FaClock,
  FaFacebook,
  FaFilm,
  FaInstagram,
  FaPlayCircle,
  FaStar,
  FaThumbsUp,
  FaTiktok,
  FaTwitter,
  FaUser,
  FaUserAlt,
} from "react-icons/fa";
import { LabelCategory } from "../../../components/Label";
import { useParams } from "react-router-dom";
import { ButtonAction } from "../../../components/Button";
import UserRating from "../../../components/rate/UserRating";
import CountryFlag from "react-country-flag";
import Movies from "../../../data/movieCover.json";
import MovieList from "../../../components/MovieList";
import ReactPlayer from "react-player";

interface MoviesInterface {
  movieName: string;
  imageUrl: string;
  overview: string;
  duration: string;
  director: string;
  country: string;
  rating: string;
  genre: string[];
}

const MovieDetail = () => {
  const params = useParams<{ movieName: string }>();
  const { movieName } = params;

  const selectedMovie = Movies.find((movie) => movie.movieName === movieName);

  return (
    <AppLayout>
      <div className="my-2">
        {/* Navigate Links */}
        <div className="text-sm my-4">
          <a href="/" className="mr-2 hover:underline">
            Home
          </a>
          <span className="mr-2">&gt;</span>
          <a href="/movies" className="mr-2 hover:underline">
            Movies
          </a>
          <span className="mr-2">&gt;</span>
          <span className="underline">{movieName ?? ""}</span>
        </div>
        {/* Movies */}
        <div className="relative mb-16 h-96 w-full flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              className="w-full h-full object-contain opacity-30"
              src={selectedMovie?.imageUrl}
              alt=""
            />
          </div>
          <div className="absolute flex top-16 left-8 right-8 h-96 bg-primary bg-opacity-30">
            <img
              src={selectedMovie?.imageUrl}
              alt="Movie Poster"
              className="w-48 h-72 object-cover m-2"
            />
            <div className="w-3/4 h-full text-left px-4 bg-transparent">
              <p className="text-aprimary text-3xl my-2 font-bold bg-transparent">
                {movieName}
              </p>
              <p className="text-base text-justify bg-transparent">
                {selectedMovie?.overview}
              </p>
              <div className="bg-transparent mb-4 mt-8 font-bold flex space-x-4">
                <span className="flex items-center bg-transparent ">
                  <FaClock className="bg-transparent mr-2" fill="red" />
                  <span className="bg-transparent">
                    {selectedMovie?.duration}
                  </span>
                </span>
                <span className="flex items-center bg-transparent ">
                  <FaUserAlt className="bg-transparent mr-2" fill="red" />
                  <span className="bg-transparent">
                    {selectedMovie?.director}
                  </span>
                </span>
                <span className="flex items-center bg-transparent ">
                  <CountryFlag countryCode="US" svg className="mr-2" />
                  {selectedMovie?.country}
                </span>
                <span className="flex items-center bg-transparent ">
                  <FaStar className="bg-transparent mr-2" fill="red" />
                  <span className="bg-transparent">
                    {selectedMovie?.rating}
                  </span>
                </span>
              </div>
              <div className="bg-transparent my-4">
                <span className="flex items-center bg-transparent space-x-4">
                  {selectedMovie?.genre.map((genre, index) => (
                    <span key={index} className="bg-aprimary px-2 rounded">
                      {genre}
                    </span>
                  ))}
                </span>
              </div>
              <div className=" mt-10 bg-transparent flex space-x-4 text-2xl">
                <a
                  href="https://www.youtube.com/watch?v=8ugaeA-nMTc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center w-fit bg-aprimary px-2 rounded border border-aprimary hover:bg-primary "
                >
                  <FaFilm className="mr-2 bg-transparent" />
                  Tailer
                </a>
                <a
                  href={`play`}
                  className="flex items-center w-fit bg-aprimary px-2 rounded border border-aprimary hover:bg-primary "
                >
                  <FaPlayCircle className="mr-2 bg-transparent" />
                  Full Movie
                </a>
              </div>
            </div>
            <div className="w-2/4 h-full flex flex-col my-2 justify-start items-start px-4 bg-transparent">
              <div className="text-xl bg-transparent mb-2">
                <p className="bg-transparent">Share to social media</p>
                <button className="m-2 ">
                  <FaFacebook className="bg-transparent" />
                </button>
                <button className="m-2">
                  <FaTwitter className="bg-transparent" />
                </button>
                <button className="m-2 ">
                  <FaTiktok className="bg-transparent" />
                </button>
                <button className="m-2">
                  <FaInstagram className="bg-transparent" />
                </button>
              </div>
              <div className="flex w-full items-center justify-between bg-transparent my-2">
                <UserRating />
                <ButtonAction
                  text="Like"
                  icon={<FaThumbsUp className="bg-transparent" />}
                />
              </div>
            </div>
          </div>
        </div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=8ugaeA-nMTc"
          controls
          // playing
          volume={0.5}
          width="100%"
          height="500px"
        />

        <div className="flex justify-between">
          <div className="my-2 border-t border-red py-4 w-8/12">
            <label htmlFor="" className="text-2xl px-3 font-bold text-aprimary">
              Cast
            </label>
            <div className="my-4 px-3 relative flex items-center overflow-x-scroll scrollbar-hide group w-full">
              {/* Adjusted the container width to 'w-full' */}
              <div className="w-44 flex-shrink-0">
                {" "}
                {/* Added flex-shrink-0 to prevent items from shrinking */}
                {/* Each item */}
                <img
                  className="h-40 w-40 object-cover border"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg"
                  alt=""
                />
                <span className="flex items-center mt-2 space-x-2">
                  <FaUser fill="red" />
                  <p>Ah Menh</p>
                </span>
              </div>
              <div className="w-44 flex-shrink-0">
                {" "}
                {/* Added flex-shrink-0 to prevent items from shrinking */}
                {/* Each item */}
                <img
                  className="h-40 w-40 object-cover border"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg"
                  alt=""
                />
                <span className="flex items-center mt-2 space-x-2">
                  <FaUser fill="red" />
                  <p>Ah Menh</p>
                </span>
              </div>
              <div className="w-44 flex-shrink-0">
                {" "}
                {/* Added flex-shrink-0 to prevent items from shrinking */}
                {/* Each item */}
                <img
                  className="h-40 w-40 object-cover border"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg"
                  alt=""
                />
                <span className="flex items-center mt-2 space-x-2">
                  <FaUser fill="red" />
                  <p>Ah Menh</p>
                </span>
              </div>
              <div className="w-44 flex-shrink-0">
                {" "}
                {/* Added flex-shrink-0 to prevent items from shrinking */}
                {/* Each item */}
                <img
                  className="h-40 w-40 object-cover border"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg"
                  alt=""
                />
                <span className="flex items-center mt-2 space-x-2">
                  <FaUser fill="red" />
                  <p>Ah Menh</p>
                </span>
              </div>
              <div className="w-44 flex-shrink-0">
                {" "}
                {/* Added flex-shrink-0 to prevent items from shrinking */}
                {/* Each item */}
                <img
                  className="h-40 w-40 object-cover border"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg"
                  alt=""
                />
                <span className="flex items-center mt-2 space-x-2">
                  <FaUser fill="red" />
                  <p>Ah Menh</p>
                </span>
              </div>
            </div>
          </div>

          <div className=" my-2 border-t border-red py-4 w-3/12">
            <label htmlFor="" className="text-2xl px-3 font-bold text-aprimary">
              Dictor
            </label>
            <div className="my-4 px-3 relative flex items-center overflow-x-scroll scrollbar-hide group w-full">
              {/* Adjusted the container width to 'w-full' */}
              <div className="w-44 flex-shrink-0">
                {" "}
                {/* Added flex-shrink-0 to prevent items from shrinking */}
                {/* Each item */}
                <img
                  className="h-40 w-40 object-cover border"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg"
                  alt=""
                />
                <span className="flex items-center mt-2 space-x-2">
                  <FaUser fill="red" />
                  <p>Ah Menh</p>
                </span>
              </div>
              <div className="w-44 flex-shrink-0">
                {" "}
                {/* Added flex-shrink-0 to prevent items from shrinking */}
                {/* Each item */}
                <img
                  className="h-40 w-40 object-cover border"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg"
                  alt=""
                />
                <span className="flex items-center mt-2 space-x-2">
                  <FaUser fill="red" />
                  <p>Ah Menh</p>
                </span>
              </div>
              <div className="w-44 flex-shrink-0">
                {" "}
                {/* Added flex-shrink-0 to prevent items from shrinking */}
                {/* Each item */}
                <img
                  className="h-40 w-40 object-cover border"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg"
                  alt=""
                />
                <span className="flex items-center mt-2 space-x-2">
                  <FaUser fill="red" />
                  <p>Ah Menh</p>
                </span>
              </div>
              <div className="w-44 flex-shrink-0">
                <img
                  className="h-40 w-40 object-cover border"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg"
                  alt=""
                />
                <span className="flex items-center mt-2 space-x-2">
                  <FaUser fill="red" />
                  <p>Ah Menh</p>
                </span>
              </div>
              <div className="w-44 flex-shrink-0">
                {" "}
                {/* Added flex-shrink-0 to prevent items from shrinking */}
                {/* Each item */}
                <img
                  className="h-40 w-40 object-cover border"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg"
                  alt=""
                />
                <span className="flex items-center mt-2 space-x-2">
                  <FaUser fill="red" />
                  <p>Ah Menh</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="my-2 border-y border-red py-4">
          <label htmlFor="" className="text-2xl px-3 font-bold text-aprimary ">
            Thumbnail
          </label>
          <div className="my-4 px-3 relative flex h-48 items-center overflow-x-scroll scrollbar-hide group">
            <img
              className="h-40 w-80 object-cover m-2 border"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSouairCWghXk0GrvSwEaWKe5poPlq0P4O6A80KVG6-rQ&s"
              alt=""
            />
            <img
              className="h-40 w-80 object-cover m-2 border"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSouairCWghXk0GrvSwEaWKe5poPlq0P4O6A80KVG6-rQ&s"
              alt=""
            />{" "}
            <img
              className="h-40 w-80 object-cover m-2 border"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSouairCWghXk0GrvSwEaWKe5poPlq0P4O6A80KVG6-rQ&s"
              alt=""
            />{" "}
            <img
              className="h-40 w-80 object-cover m-2 border"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSouairCWghXk0GrvSwEaWKe5poPlq0P4O6A80KVG6-rQ&s"
              alt=""
            />{" "}
            <img
              className="h-40 w-80 object-cover m-2 border"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSouairCWghXk0GrvSwEaWKe5poPlq0P4O6A80KVG6-rQ&s"
              alt=""
            />{" "}
            <img
              className="h-40 w-80 object-cover m-2 border"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSouairCWghXk0GrvSwEaWKe5poPlq0P4O6A80KVG6-rQ&s"
              alt=""
            />
          </div>
        </div>
        <div className="my-4">
          <LabelCategory htmlFor="maybeyoulike" textLabel="Maybe You Like" />
          <MovieList />
        </div>
      </div>
    </AppLayout>
  );
};

export default MovieDetail;
