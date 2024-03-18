import React, { useState } from "react";
import { Logo } from "../components/Logo"; // Adjust import for Logo
import NavbarLink from "../data/navbarLink.json"; // Adjust import for JSON data
import { InputText } from "../components/input/InputText";
import { Link, LinkList, LinkNavigation } from "../components/link/Link";
import data from "../data/_test.json";

export const HeaderLogo = () => {
  return (
    <div className="box">
      <div>
        <Logo />
      </div>
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
    <div className="flex items-center justify-between h-20 px-4">
      <div>
        <Logo />
      </div>
      <div className="flex items-center">
        <Link title="Home" url="home" />
        <LinkList categories={data} />
      </div>
      <div className="flex items-center">
        <form>
          <InputText
            type="text"
            value={formData.search}
            onChange={(value) => handleChange("search", value)}
            placeholder="Search"
            className="m-2"
          />
        </form>
        <div className="m-2">
          <Link url="explore" title="Explore" />
        </div>
      </div>
      <div className="flex items-center">
        <Link url="signup" title="Sign Up" />
        <span className="text-aprimary">|</span>
        <Link url="signin" title="Sign In" />
      </div>
    </div>
  );
};
