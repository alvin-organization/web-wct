import { useParams } from "react-router-dom";
import MovieList from "../../components/MovieList";
import AppLayout from "../../layout/AppLayout";
import { LabelCategory } from "../../components/Label";

const MoviesList = () => {
  const params = useParams<{ genre: string }>();
  const { genre } = params;
  return (
    <AppLayout page={genre}>
      {genre === "Movies" ||
      genre === "TV-Shows" ||
      genre === "Years" ||
      genre === "Countries" ? (
        <>
          <MovieList />
        </>
      ) : (
        <>
          <LabelCategory htmlFor={genre} textLabel={genre} />
          <MovieList genre={genre} />
        </>
      )}
    </AppLayout>
  );
};

export default MoviesList;
