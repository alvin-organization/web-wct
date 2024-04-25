import AppLayout from "../../layout/AppLayout";
import MovieList from "../../components/MovieList";
import { useParams } from "react-router-dom";
import { LabelCategory } from "../../components/Label";

const MoviesGenre = () => {
  const params = useParams<{ genre: string }>();
  const { genre } = params;
  return (
    <AppLayout page="movies">
      <LabelCategory htmlFor={genre} textLabel={genre} />
      <MovieList />
    </AppLayout>
  );
};

export default MoviesGenre;
