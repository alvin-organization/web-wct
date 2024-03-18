import { useState } from "react";
import { InputText } from "../../components/input/InputText";
import { HeaderLogo } from "../../layout/Header";
import "./SignIn.scss";
import { Label, LabelInput } from "../../components/label/LabelInput";
import Button from "../../components/button/Button";
import { Link } from "../../components/link/Link";
import Footer from "../../layout/Footer";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username_email: "",
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
        <Label htmlFor="password" textLabel="Sign In" />
        <form className="container-signin-border">
          <LabelInput htmlFor="username_email" textLabel="Username or Email" />
          <InputText
            type="text"
            value={formData.username_email}
            onChange={(value) => handleChange("username_email", value)}
            placeholder="Enter username or email"
          />
          <LabelInput htmlFor="password" textLabel="Password" />
          <InputText
            type="Password"
            value={formData.password}
            onChange={(value) => handleChange("password", value)}
            placeholder="Enter Password"
          />
          <div>
            <Button textButton="Sign In" />
          </div>
        </form>
        <div>
          <p>
            Have account?
            <Link url="signup" title="Sign Up" />
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

export default SignIn;
