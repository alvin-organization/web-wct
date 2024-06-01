import { useParams } from "react-router-dom";
import MovieList from "../../components/MovieList";
import AppLayout from "../../layout/AppLayout";
import { LabelCategory } from "../../components/Label";
import NotFoundPage from "../NotFoundPage";

const MoviesPage = () => {
  const params = useParams<{ page: string }>();
  const { page } = params;
  return (
    <>
      {page === "movies" ||
      page === "tv-show" ||
      page === "years" ||
      page === "countries" ? (
        <AppLayout page={page}>
          <MovieList genre={page} />
        </AppLayout>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};

export default MoviesPage;
