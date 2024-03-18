import React, { useState } from "react";
import Button from "./button/Button";
import { InputText } from "./input/InputText";
import { Label, LabelInput } from "./label/LabelInput";
import { Container } from "./container/Container";
import { Header, HeaderLogo } from "../layout/header/Header";
import { LinkList, LinkNavigation } from "./link/Link";
import data from "../data/_test.json";

const ComponentTest = () => {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (newValue: string) => {
    setUsername(newValue);
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <LinkList categories={data} />
      </div>
      <div>
        <Button textButton="Go to About" />
        <LabelInput
          htmlFor="password"
          className="required"
          textLabel="Password"
        />
        <LabelInput htmlFor="password" textLabel="Password" />
        <InputText
          type="text "
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter username"
        />
        <br></br>
        <Label htmlFor="password" textLabel="singup" />
        <Container>
          <p>Welcome to My App</p>
          <p>This is the content inside the container.</p>
        </Container>
      </div>
    </>
  );
};

export default ComponentTest;
