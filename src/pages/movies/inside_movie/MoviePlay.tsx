import { useParams } from "react-router-dom";
import AppLayout from "../../../layout/AppLayout";
import VideoPlayer from "../../../components/VideoPlayer";
import Poster from "../../../components/Poster";
import { LabelCategory } from "../../../components/Label";
import MovieList from "../../../components/MovieList";
import ReactPlayer from "react-player";
import Video from "../../../assets/Video.mp4";
import Thumbnail from "../../../assets/Cover.png";

const MoviePlay = () => {
  const params = useParams<{ movieName: string }>();
  const { movieName } = params;
  return (
    <AppLayout>
      <>
        <div className="text-sm my-4 z-0 top-0">
          <a href="/" className="mr-2 hover:underline">
            Home
          </a>
          <span className="mr-2">&gt;</span>
          <a href="movies" className="mr-2 hover:underline">
            Movies
          </a>
          <span className="mr-2">&gt;</span>
          <a href="detail">
            <span className="mr-2 hover:underline">{movieName}</span>
          </a>
          <span className="mr-2">&gt;</span>
          <span className="underline">Watch Now</span>
        </div>
        {/* Movies */}
        <p className="my-8 text-4xl font-bold text-aprimary text-center">
          {movieName}
        </p>
        <VideoPlayer />
      </>
      <div className="my-4">
        <LabelCategory htmlFor="maybeyoulike" textLabel="Maybe You Like" />
        <MovieList />
      </div>
    </AppLayout>
  );
};

export default MoviePlay;
