import { useParams } from "react-router-dom";
import MovieList from "../../components/MovieList";
import AppLayout from "../../layout/AppLayout";
import { LabelCategory } from "../../components/Label";
import NotFoundPage from "../NotFoundPage";

const MoviesGenrePage = () => {
  const params = useParams<{ page: string; genre: string }>();
  const { genre } = params;
  const { page } = params;

  return (
    <>
      {page === "movies" ||
      page === "tv-show" ||
      page === "years" ||
      page === "countries" ? (
        <AppLayout page={genre}>
          <LabelCategory
            htmlFor={genre}
            textLabel={
              genre ? genre.charAt(0).toUpperCase() + genre.slice(1) : ""
            }
          />
          <MovieList genre={genre} />
        </AppLayout>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};

export default MoviesGenrePage;
