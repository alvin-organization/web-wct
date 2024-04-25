import { useState } from "react";
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
  const [formData, setFormData] = useState({
    search: "",
  });

  const handleChange = (inputType: string, newValue: string) => {
    setFormData({
      ...formData,
      [inputType]: newValue,
    });
  };
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
        {page === "movies" ? (
          <div className="group">
            <LinkDisabled
              title="Movies"
              icon={<FaFilm style={{ fill: "red" }} />}
            />
            <div className="absolute top-13 p-4 bg-primary grid grid-cols-3 z-50 gap-2 hidden group-hover:grid">
              <Link url="/movies/Action" title="Action" />
              <Link url="/movies/Comady" title="Comady" />
              <Link url="/movies/Horors" title="Horors" />
            </div>
          </div>
        ) : (
          <div className="group">
            <Link url="/movies" title="Movies" icon={<FaFilm />} />
            <div className="absolute top-13 p-4 bg-primary grid grid-cols-3 z-50 gap-2 hidden group-hover:grid">
              <Link url="/movies/Action" title="Action" />
              <Link url="/movies/Comady" title="Comady" />
              <Link url="/movies/Horors" title="Horors" />
            </div>
          </div>
        )}

        {/* TV-Show */}
        {page === "tv-show" ? (
          <LinkDisabled
            title="TV-Shows"
            icon={<FaTv style={{ fill: "red" }} />}
          />
        ) : (
          <Link url="/tv-show" title="TV-Shows" icon={<FaTv />} />
        )}

        {/* Years */}
        {page === "years" ? (
          <LinkDisabled
            title="Years"
            icon={<FaCalendarAlt style={{ fill: "red" }} />}
          />
        ) : (
          <Link url="/years" title="Years" icon={<FaCalendarAlt />} />
        )}

        {page === "countries" ? (
          <LinkDisabled
            title="Countries"
            icon={<FaGlobeAmericas style={{ fill: "red" }} />}
          />
        ) : (
          <Link url="/countries" title="Countries" icon={<FaGlobeAmericas />} />
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
        <Link url="signup" title="Account" icon={<FaUserAlt />} />
      </div>
    </div>
  );
};
