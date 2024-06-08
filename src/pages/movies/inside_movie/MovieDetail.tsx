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
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import Pusher from "pusher-js";
import ReactPlayer from "react-player";

const MovieDetail = () => {
  const user = useSelector(
    (state: RootState) => state?.user?.currentUser?.data
  );
  const params = useParams<{ id: any }>();
  const { id } = params;
  const [message, setMessage] = useState<string>();
  const [movie, setMovie] = useState<any>([]);
  const [movieGenres, setMovieGenres] = useState<any>([]);
  const [movieArtists, setMovieArtists] = useState<any>([]);
  const [movieCountries, setMovieCountries] = useState<any>([]);
  const [moviePhotos, setMoviePhotos] = useState<any>([]);

  //Fetch movie by id
  const fetchMovieById = async (movieId: string): Promise<void> => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/movies/${movieId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      if (!response.ok) {
        setMessage(data.message);
        return;
      }

      // Assuming setMovieById is a function to update movie state by id
      setMovie(data.data);
    } catch (error) {
      setMessage("");
    }
  };

  //Fetch movie genres
  const fetchMovieGenres = async (movieId: string): Promise<void> => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/movie_genres/${movieId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      if (!response.ok) {
        setMessage(data.message);
        return;
      }

      // Assuming setMovieGenres is a function to update movie genres state by id
      setMovieGenres(data.data);
    } catch (error) {
      setMessage("");
    }
  };

  //Fetch movie artists
  const fetchMovieArtists = async (movieId: string): Promise<void> => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/movie_artists/${movieId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        setMessage(data.message);
        return;
      }

      // Assuming setMovieArtists is a function to update movie artists state by id
      setMovieArtists(data.data);
    } catch (error) {
      setMessage("");
    }
  };

  //Fetch movie countries
  const fetchMovieCountries = async (movieId: string): Promise<void> => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/movie_countries/${movieId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      if (!response.ok) {
        setMessage(data.message); // Assuming setMessage is used to handle error messages
        return;
      }

      // Assuming setMovieCountries is a function to update movie countries state by id
      setMovieCountries(data.data);
    } catch (error) {
      setMessage(""); // Resetting message in case of an error
    }
  };

  //Fetch movie photo
  const fetchMoviePhotos = async (movieId: string): Promise<void> => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/movie_photos/${movieId}`, // Update the endpoint
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      if (!response.ok) {
        setMessage(data.message); // Assuming setMessage is used to handle error messages
        return;
      }

      // Assuming setMoviePhotos is a function to update movie photos state by id
      setMoviePhotos(data.data);
    } catch (error) {
      setMessage(""); // Resetting message in case of an error
    }
  };

  useEffect(() => {
    fetchMovieById(id);
    fetchMovieGenres(id);
    fetchMovieArtists(id);
    fetchMovieCountries(id);
    fetchMoviePhotos(id);
  }, [id]);
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
          <span className="underline">{movie.title ?? ""}</span>
        </div>
        {/* Movies */}
        <div className="relative h-auto w-full flex items-center justify-center">
          <img
            className="w-full h-96 object-cover opacity-30"
            src={movie?.cover_image}
            alt=""
          />

          <div className="absolute flex top-8 left-8 right-8 h-80 bg-primary bg-opacity-30 items-center">
            <img
              src={movie?.poster_image}
              alt="Movie Poster"
              className="w-48 h-72 object-cover m-2"
            />
            <div className="w-3/4 h-full text-left px-4 bg-transparent">
              <p className="text-aprimary text-3xl my-2 font-bold bg-transparent">
                {movie?.title}
              </p>
              <p className="text-base text-justify bg-transparent">
                {movie?.overview}
              </p>
              <div className="bg-transparent mb-4 mt-8 font-bold flex space-x-4">
                <span className="flex items-center bg-transparent">
                  <FaClock className="bg-transparent mr-2" fill="red" />
                  <span className="bg-transparent">{movie?.run_time}min</span>
                </span>
                <span className="flex items-center bg-transparent">
                  <FaUserAlt className="bg-transparent mr-2" fill="red" />
                  <span className="bg-transparent">
                    {movieArtists?.map(
                      (movieArtist: any) =>
                        movieArtist.role_name === "Director" && (
                          <span key={movieArtist.id}>
                            {movieArtist.artist_name}
                          </span>
                        )
                    )}
                  </span>
                </span>
                <span className="flex items-center bg-transparent">
                  {movieCountries?.map((movieCountry: any, index: number) => (
                    <span
                      key={movieCountry.id || index}
                      className="flex items-center bg-transparent"
                    >
                      <CountryFlag
                        countryCode={movieCountry.country_code}
                        svg
                        className="mr-2"
                      />
                      <a
                        href={`/countries/${movieCountry.country_code}`}
                        className="bg-transparent"
                      >
                        {movieCountry.country_name}
                      </a>
                    </span>
                  ))}
                </span>
                <span className="flex items-center bg-transparent">
                  <FaStar className="bg-transparent mr-2" fill="red" />
                  <span className="bg-transparent">
                    {movie?.average_rating}
                  </span>
                </span>
              </div>
              <div className="bg-transparent my-4">
                <span className="flex items-center bg-transparent space-x-4">
                  {movieGenres?.map((movieGenre: any, index: number) => (
                    <a
                      key={movieGenre.id || index} // Ensure a unique key
                      href={`/movies/${movieGenre.genre_id}`}
                      className="bg-aprimary px-2 rounded"
                    >
                      {movieGenre.genre_name}
                    </a>
                  ))}
                </span>
              </div>
              <div className="mt-10 bg-transparent flex space-x-4 text-2xl">
                {/* <a
                  href={movie?.trailer_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center w-fit bg-aprimary px-2 rounded border border-aprimary hover:bg-primary"
                >
                  <FaFilm className="mr-2 bg-transparent" />
                  Trailer
                </a> */}
                <a
                  href={`play`}
                  className="flex items-center w-fit bg-aprimary px-2 rounded border border-aprimary hover:bg-primary"
                >
                  <FaPlayCircle className="mr-2 bg-transparent" />
                  Full Movie
                </a>
              </div>
            </div>
            <div className="w-2/4 h-full flex flex-col my-2 justify-start items-start px-4 bg-transparent">
              <div className="text-xl bg-transparent mb-2">
                <p className="bg-transparent">Share to social media</p>
                <Button className="m-2">
                  <FaFacebook className="bg-transparent" />
                </Button>
                <Button className="m-2">
                  <FaTwitter className="bg-transparent" />
                </Button>
                <Button className="m-2">
                  <FaTiktok className="bg-transparent" />
                </Button>
                <Button className="m-2">
                  <FaInstagram className="bg-transparent" />
                </Button>
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
        <div className="flex justify-between">
          <div className="my-2 border-t border-red py-4 w-full">
            <label htmlFor="" className="text-2xl px-3 font-bold text-aprimary">
              Trailer
            </label>
            <div className="my-4 px-3 relative flex items-center overflow-x-scroll scrollbar-hide group w-full">
              {/* {movie?.map((movie: any, index: number) => ( */}
              <ReactPlayer
                url={movie?.trailer_url}
                controls
                volume={0.5}
                width="400px"
                height="300px"
              />
              {/* ))} */}
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="my-2 border-t border-red py-4 w-8/12">
            <label htmlFor="" className="text-2xl px-3 font-bold text-aprimary">
              Cast
            </label>
            <div className="my-4 px-3 relative flex overflow-x-scroll scrollbar-hide group w-full">
              {movieArtists?.map(
                (movieArtist: any) =>
                  movieArtist.role_name !== "Director" &&
                  movieArtist.role_name !== "Producer" && (
                    <div key={movieArtist.id} className="w-44 flex-shrink-0">
                      <img
                        className="h-40 w-40 object-cover border"
                        src={movieArtist.artist_profile}
                        alt={movieArtist.artist_name}
                      />
                      <div className="flex items-center mt-2 space-x-2">
                        <p className="text-balance">
                          {movieArtist.artist_name}
                        </p>
                      </div>
                      <span className="flex items-center mt-2 text-xs space-x-2">
                        <p className="text-aprimary">
                          {movieArtist.movie_artist_name}
                        </p>
                      </span>
                    </div>
                  )
              )}
            </div>
          </div>

          <div className="my-2 border-t border-red py-4 w-3/12">
            <label htmlFor="" className="text-2xl px-3 font-bold text-aprimary">
              Director
            </label>
            <div className="my-4 px-3 relative flex items-center overflow-x-scroll scrollbar-hide group w-full">
              {movieArtists?.map(
                (movieArtist: any) =>
                  (movieArtist.role_name === "Director" ||
                    movieArtist.role_name === "Producer") && (
                    <div key={movieArtist.id} className="w-44 flex-shrink-0">
                      <img
                        className="h-40 w-40 object-cover border"
                        src={movieArtist.artist_profile}
                        alt={movieArtist.artist_name}
                      />
                      <span className="flex items-center mt-2 space-x-2">
                        <p>{movieArtist.artist_name}</p>
                      </span>
                      <span className="flex items-center mt-2 text-xs space-x-2">
                        <p className="text-aprimary">{movieArtist.role_name}</p>
                      </span>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
        <div className="my-2 border-y border-red py-4">
          <label htmlFor="" className="text-2xl px-3 font-bold text-aprimary">
            Thumbnail
          </label>
          <div className="my-4 px-3 relative flex h-48 items-center overflow-x-scroll scrollbar-hide group">
            {moviePhotos?.map((moviePhoto: any) => (
              <img
                key={moviePhoto.id}
                className="h-40 w-80 object-cover m-2 border"
                src={moviePhoto?.photo_path}
                alt="thumbnail"
              />
            ))}
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
