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
    (state: RootState) => state?.user?.currentUser?.user
  );
  const [message, setMessage] = useState<string>();
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
      console.log(data);
      if (!response.ok) {
        setMessage(data.message);
        return;
      }

      // Handle the successful response (e.g., dispatch an action)
    } catch (error) {
      // Handle errors (e.g., dispatch an action to indicate sign-in failure)
      // dispatch(signInFailure(error));
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div className="w-full h-20 border-b-2 border-aprimary flex items-center justify-between pr-3 mb-4  ">
      <Logo />
      <div className="flex items-center justify-between ">
        {/* Home */}
        {page === "home" ? (
          <LinkDisabled
            title="Home"
            icon={<FaHome style={{ fill: "red" }} />}
          />
        ) : (
          <Link url="/" title="Home" icon={<FaHome />} />
        )}

        {/* Movies */}
        {page === "Movies" ? (
          <div className="group">
            <LinkDisabled
              title="Movies"
              icon={<FaFilm style={{ fill: "red" }} />}
            />
            <div className="absolute top-13 p-4 bg-primary grid grid-cols-3 z-50 gap-2 hidden group-hover:grid">
              <Link url="/Action" title="Action" />
              <Link url="/Comady" title="Comady" />
              <Link url="/Horors" title="Horors" />
            </div>
          </div>
        ) : (
          <div className="group">
            <Link url="/Movies" title="Movies" icon={<FaFilm />} />
            <div className="absolute top-13 p-4 bg-primary grid grid-cols-3 z-50 gap-2 hidden group-hover:grid">
              <Link url="/Action" title="Action" />
              <Link url="/Comady" title="Comady" />
              <Link url="/Horors" title="Horors" />
            </div>
          </div>
        )}

        {/* TV-Show */}
        {page === "TV-Shows" ? (
          <div className="group">
            <LinkDisabled
              title="TV-Shows"
              icon={<FaTv style={{ fill: "red" }} />}
            />
            <div className="absolute top-13 p-4 bg-primary grid grid-cols-3 z-50 gap-2 hidden group-hover:grid">
              <Link url="/C-Drama" title="C-Drama" />
              <Link url="/K-Drama" title="K-Drama" />
              <Link url="/Khmer Drama" title="Khmer Drama" />
            </div>
          </div>
        ) : (
          <div className="group">
            <Link url="/TV-Shows " title="TV-Shows" icon={<FaTv />} />
            <div className="absolute top-13 p-4 bg-primary grid grid-cols-3 z-50 gap-2 hidden group-hover:grid">
              <Link url="/C-Drama" title="C-Drama" />
              <Link url="/K-Drama" title="K-Drama" />
              <Link url="/Khmer Drama" title="Khmer Drama" />
            </div>
          </div>
        )}

        {/* Years */}
        {page === "Years" ? (
          <div className="group">
            <LinkDisabled
              title="Years"
              icon={<FaCalendarAlt style={{ fill: "red" }} />}
            />
            <div className="absolute top-13 p-4 bg-primary grid grid-cols-3 z-50 gap-2 hidden group-hover:grid">
              <Link url="/2020" title="2020" />
              <Link url="/2021" title="2021" />
              <Link url="/2022" title="2022" />
            </div>
          </div>
        ) : (
          <div className="group">
            <Link url="/Years" title="Years" icon={<FaCalendarAlt />} />
            <div className="absolute top-13 p-4 bg-primary grid grid-cols-3 z-50 gap-2 hidden group-hover:grid">
              <Link url="/2020" title="2020" />
              <Link url="/2021" title="2021" />
              <Link url="/2022" title="2022" />
            </div>
          </div>
        )}

        {page === "Countries" ? (
          <div className="group">
            <LinkDisabled
              title="Countries"
              icon={<FaGlobeAmericas style={{ fill: "red" }} />}
            />
            <div className="absolute top-13 p-4 bg-primary grid grid-cols-3 z-50 gap-2 hidden group-hover:grid">
              <Link url="/USA" title="USA" />
              <Link url="/UK" title="UK" />
              <Link url="/Canada" title="Canada" />
            </div>
          </div>
        ) : (
          <div className="group">
            <Link
              url="/Countries"
              title="Countries"
              icon={<FaGlobeAmericas />}
            />
            <div className="absolute top-13 p-4 bg-primary grid grid-cols-3 z-50 gap-2 hidden group-hover:grid">
              <Link url="/USA" title="USA" />
              <Link url="/UK" title="UK" />
              <Link url="/Canada" title="Canada" />
            </div>
          </div>
        )}
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
