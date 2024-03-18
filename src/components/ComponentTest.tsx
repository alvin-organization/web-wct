import React, { useState } from "react";
import Button from "./button/Button";
import { InputText } from "./input/InputText";
import { Label, LabelCategory, LabelInput } from "./label/LabelInput";
import { Container } from "./container/Container";
import { Header, HeaderLogo } from "../layout/Header";
import { LinkList, LinkNavigation } from "./link/Link";
import data from "../data/_test.json";
import movieData from "../data/movieCover.json";
import Poster from "./poster/Poster";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Logo } from "./Logo";
import AppLayout from "../layout/AppLayout";

const ComponentTest = () => {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (newValue: string) => {
    setUsername(newValue);
  };

  return <AppLayout>sdf</AppLayout>;
};

export default ComponentTest;
