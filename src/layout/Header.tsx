import React, { useState } from "react";
import { Logo } from "../components/Logo"; // Adjust import for Logo
import NavbarLink from "../data/navbarLink.json"; // Adjust import for JSON data
import Input from "../components/Input";
import data from "../data/_test.json";
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
import { Link } from "../components/Link";

export const HeaderLogo = () => {
  return (
    <div className="w-full h-20 border-b-2 border-aprimary flex items-center justify-center mb-2 ">
      <Logo />
    </div>
  );
};

export const Header = () => {
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
        <div className="group">
          <Link url="/" title="Home" icon={<FaHome />} />
          <div className="absolute top-13 p-4 bg-primary grid grid-cols-3 z-50 gap-2 hidden group-hover:grid">
            <Link url="/" title="Home" />
            <Link url="/" title="Home" />
            <Link url="/" title="Home" />
            <Link url="/" title="Home" />
            <Link url="/" title="Home" />
          </div>
        </div>
        <Link url="/movies" title="Movies" icon={<FaFilm />} />
        <Link url="/tv-show" title="TV-Shows" icon={<FaTv />} />
        <Link url="/years" title="Years" icon={<FaCalendarAlt />} />
        <Link url="/countries" title="Countries" icon={<FaGlobeAmericas />} />
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
          <Link url="/" title="Explore" icon={<FaCompass />} />
        </div>
      </div>
      <div className="flex items-center">
        <Link url="signup" title="Account" icon={<FaUserAlt />} />
      </div>
    </div>
  );
};
