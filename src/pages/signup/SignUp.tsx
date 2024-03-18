import { useState } from "react";
import { InputText } from "../../components/input/InputText";
import { HeaderLogo } from "../../layout/header/Header";
import "./SignUp.scss";
import { Label, LabelInput } from "../../components/label/LabelInput";
import Button from "../../components/button/Button";
import { Link } from "../../components/link/Link";
import Footer from "../../layout/footer/Footer";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const handleChange = (inputType: string, newValue: string) => {
    setFormData({
      ...formData,
      [inputType]: newValue,
    });
  };

  return (
    <>
      <HeaderLogo />
      <div className="container-signin">
        <Label htmlFor="password" textLabel="Sign Up" />
        <form className="container-signin-border">
          <LabelInput htmlFor="username" textLabel="Username" />
          <InputText
            type="text"
            value={formData.username}
            onChange={(value) => handleChange("username", value)}
            placeholder="Enter username"
          />
          <LabelInput htmlFor="email" textLabel="Email" />
          <InputText
            type="email"
            value={formData.email}
            onChange={(value) => handleChange("email", value)}
            placeholder="Enter email"
          />
          <LabelInput htmlFor="password" textLabel="Password" />
          <InputText
            type="Password"
            value={formData.password}
            onChange={(value) => handleChange("password", value)}
            placeholder="Enter Password"
          />
          <LabelInput htmlFor="cPassword" textLabel="Confirm Password" />
          <InputText
            type="Password"
            value={formData.cPassword}
            onChange={(value) => handleChange("cPassword", value)}
            placeholder="Enter Confirm Password"
          />
          <div>
            <Button textButton="Sign Up" />
          </div>
        </form>
        <div>
          <p>
            Have account?
            <Link url="signin" title="Sign In" />
          </p>
          <p>
            Forgot Password?
            <Link url="" title="Reset Password" />
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
