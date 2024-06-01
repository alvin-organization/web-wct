import { useEffect, useState } from "react";
import { Logo } from "../components/Logo"; // Adjust import for Logo
import Input from "../components/Input";
import {
  FaCalendarAlt,
  FaCompass,
  FaFilm,
  FaGlobeAmericas,
  FaHome,
  FaSearch,
  FaTv,
  FaUserAlt,
} from "react-icons/fa";
import { Link, LinkDisabled } from "../components/Link";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

//Header Logo only
export const HeaderLogo = () => {
  return (
    <div className="w-full h-18 border-b-2 border-aprimary flex items-center justify-center ">
      <Logo />
    </div>
  );
};

//Normal Header
export const Header = ({ page }: { page?: string }) => {
  const user = useSelector(
    (state: RootState) => state?.user?.currentUser?.data
  );
  const [message, setMessage] = useState<string>();
  const [genres, setGenres] = useState<any>([]);
  const [tvShows, setTvShows] = useState<any>([]);

  const [formData, setFormData] = useState({
    search: "",
  });

  const handleChange = (inputType: string, newValue: string) => {
    setFormData({
      ...formData,
      [inputType]: newValue,
    });
  };

  //Genre
  const fetchGenres = async (): Promise<void> => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/genres", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message);
        return;
      }

      setGenres(data.data);
    } catch (error) {
      setMessage("");
    }
  };

  //TV-Show
  const fetchTVShow = async (): Promise<void> => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/tv_shows", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message);
        return;
      }
      setTvShows(data.data);
    } catch (error) {
      setMessage("");
    }
  };

  useEffect(() => {
    fetchGenres();
    fetchTVShow();
  }, []);

  return (
    <div className="w-full h-20 border-b-2 border-aprimary flex items-center justify-between pr-3 mb-4 sticky top-0 z-50 ">
      <Logo />

      <div className="flex items-center justify-between ">
        <a
          href="/"
          className={`relative mx-2 ${
            page === "home" ? "pointer-events-none" : ""
          }`}
        >
          <span className="absolute inset-y-0 left-0 flex items-center bg-transparent sm:display-none">
            <FaHome fill={page === "home" ? "red" : "white"} />
          </span>
          <p
            className={` ml-6 ${
              page === "home" ? "text-aprimary font-bold" : "link"
            } display:block hidden xl:flex`}
          >
            Home
          </p>
        </a>

        <div className="group">
          <a
            href="/movies"
            className={`relative mx-2 ${
              page === "movies" ? "pointer-events-none" : ""
            }`}
          >
            <span className="absolute inset-y-0 left-0 flex items-center bg-transparent sm:display-none">
              <FaFilm fill={page === "movies" ? "red" : "white"} />
            </span>
            <p
              className={`ml-8 ${
                page === "movies" ? "text-aprimary font-bold" : "link"
              } display:block hidden xl:flex`}
            >
              Movies
            </p>
          </a>
          <div className="absolute top-13 p-2 bg-primary grid grid-cols-3 z-50 gap-7 hidden group-hover:grid">
            {genres ? (
              genres.map((genre: any, genre_name: string) => (
                <div key={genre.id}>
                  <a href={`/movies/${genre.genre_name}`} className="link">
                    {genre.genre_name}
                  </a>
                </div>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
        <div className="group">
          <a
            href="tv-show"
            className={`relative mx-2 ${
              page === "tv-show" ? "pointer-events-none" : ""
            }`}
          >
            <span className="absolute inset-y-0 left-0 flex items-center bg-transparent sm:display-none">
              <FaTv fill={page === "tv-show" ? "red" : "white"} />
            </span>
            <p
              className={`ml-8 ${
                page === "tv-show" ? "text-aprimary font-bold" : "link"
              } display:block hidden xl:flex`}
            >
              TV-Show
            </p>
          </a>
          <div className="absolute top-13 p-4 bg-primary grid grid-cols-3 z-50 gap-4 hidden group-hover:grid">
            {tvShows ? (
              tvShows.map((tvShows: any) => (
                <div key={tvShows.id}>
                  <a href={`/tv-show/${tvShows.tvShows_name}`} className="link">
                    {tvShows.tv_show_name}
                  </a>
                </div>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
        <div className="group">
          <a
            href="countries"
            className={`relative mx-2 ${
              page === "countries" ? "pointer-events-none" : ""
            }`}
          >
            <span className="absolute inset-y-0 left-0 flex items-center bg-transparent sm:display-none">
              <FaGlobeAmericas fill={page === "countries" ? "red" : "white"} />
            </span>
            <p
              className={`ml-8 ${
                page === "countries" ? "text-aprimary font-bold" : "link"
              } display:block hidden xl:flex`}
            >
              Countries
            </p>
          </a>
          <div className="absolute top-13 p-4 bg-primary grid grid-cols-3 z-50 gap-4 hidden group-hover:grid">
            {genres ? (
              genres.map((genre: any) => (
                <div key={genre.id}>
                  <a href="" className="link">
                    {genre.genre_name}
                  </a>
                </div>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
        <div className="group">
          <a
            href="years"
            className={`relative mx-2 ${
              page === "years" ? "pointer-events-none" : ""
            }`}
          >
            <span className="absolute inset-y-0 left-0 flex items-center bg-transparent sm:display-none">
              <FaCalendarAlt fill={page === "years" ? "red" : "white"} />
            </span>
            <p
              className={`ml-8 ${
                page === "years" ? "text-aprimary font-bold" : "link"
              } display:block hidden xl:flex`}
            >
              Years
            </p>
          </a>
          <div className="absolute top-13 p-4 bg-primary grid grid-cols-3 z-50 gap-4 hidden group-hover:grid">
            {genres ? (
              genres.map((genre: any) => (
                <div key={genre.id}>
                  <a href="" className="link">
                    {genre.genre_name}
                  </a>
                </div>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <form>
          <Input
            type="text"
            value={formData.search}
            onChange={(value) => handleChange("search", value)}
            placeholder="Search..."
            icon={<FaSearch />}
          />
        </form>
        <div className="m-2">
          {page === "explore" ? (
            <LinkDisabled
              title="Explore"
              icon={<FaCompass style={{ fill: "red" }} />}
            />
          ) : (
            <Link url="/explore" title="Explore" icon={<FaCompass />} />
          )}
        </div>
      </div>
      <div className="flex items-center">
        {user ? (
          <a href="profile" className="flex items-center space-x-2">
            <p> {user.username}</p>
            <img
              src={user.profile}
              alt=""
              className="h-8 w-8 rounded rounded-full object-cover border border-aprimary"
            />
          </a>
        ) : (
          <Link url="signup" title="Account" icon={<FaUserAlt />} />
        )}
      </div>
    </div>
  );
};
