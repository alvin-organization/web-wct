import React, { useState } from "react";
import { Logo } from "../../components/logo/Logo"; // Adjust import for Logo
import NavbarLink from "../../data/navbarLink.json"; // Adjust import for JSON data
import "./Header.scss";
import { InputText } from "../../components/input/InputText";
import { Link, LinkList, LinkNavigation } from "../../components/link/Link";
import data from "../../data/_test.json";

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
    <div className="box" style={{ justifyContent: "space-between" }}>
      <div>
        <Logo />
      </div>
      <div className="navbarlink">
        <Link title="Home" url="home" />
        <LinkList categories={data} />
      </div>
      <div className="search">
        <form>
          <InputText
            type="text"
            value={formData.search}
            onChange={(value) => handleChange("search", value)}
            placeholder="Search"
          />
        </form>
        <div className="navbarlink-a">
          <a href="">Expoler</a>
        </div>
      </div>
      <div className="navbarlink-a">
        <a href="signup"> Sign Up</a>
        <span>|</span>
        <a href="signin"> Sign In</a>
      </div>
    </div>
  );
};
