import MovieList from "../../components/MovieList";
import AppLayout from "../../layout/AppLayout";

const MoviesList = () => {
  return (
    <AppLayout page="movies">
      <MovieList />
    </AppLayout>
  );
};

export default MoviesList;
