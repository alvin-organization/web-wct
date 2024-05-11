import React, { FormEvent, useState } from "react";
import AppLayout from "../layout/AppLayout";
import { Label, LabelInput } from "../components/Label";
import { useNavigate } from "react-router-dom";
import { ButtonAction } from "../components/Button";
import {
  FaArrowAltCircleLeft,
  FaArrowLeft,
  FaEnvelope,
  FaKey,
  FaKeybase,
  FaRegArrowAltCircleLeft,
  FaSignInAlt,
  FaUser,
} from "react-icons/fa";
import Input from "../components/Input";
import { Link, LinkButton } from "../components/Link";

interface userInformation {
  username: string;
  email: string;
}
const Setting = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const [message, setMessage] = useState<any>({});
  const [err, setErr] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (inputType: keyof userInformation, newValue: string) => {
    setFormData({
      ...formData,
      [inputType]: newValue,
    });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
  };

  return (
    <AppLayout>
      <div className="flex flex-col items-center w-1/2 m-auto">
        <span className="flex items-center">
          <a href="/profile" className="absolute left-10">
            <FaArrowLeft />
          </a>
          <Label textLabel="Profile" />
        </span>
        <div className="my-4">
          <img
            className="w-32 h-32 rounded-full border"
            src="https://static.vecteezy.com/system/resources/previews/011/675/365/original/man-avatar-image-for-profile-png.png"
          />
        </div>
        <Label htmlFor="" textLabel="Edit Your Informatuon" />
        <p className="text-aprimary font-bold">Username or Email</p>
        <form className="flex flex-col w-96 my-2" onSubmit={handleSubmit}>
          <LabelInput htmlFor="username" textLabel="Username " />
          <Input
            type="text"
            value={formData.username}
            onChange={(value) => handleChange("username", value)}
            placeholder="Username"
            icon={<FaUser />}
          />
          <LabelInput htmlFor="email" textLabel="Email" />
          <Input
            type="email"
            value={formData.email}
            onChange={(value) => handleChange("email", value)}
            placeholder="Email"
            icon={<FaEnvelope />}
          />
          <ButtonAction
            text="Save"
            icon={<FaSignInAlt className="bg-transparent" />}
          />
        </form>
        <p className="text-aprimary font-bold mt-4">Password</p>
        <form className="flex flex-col w-96 my-2" onSubmit={handleSubmit}>
          <LabelInput htmlFor="username" textLabel="Current Password " />
          <Input
            type="text"
            value={formData.username}
            onChange={(value) => handleChange("username", value)}
            placeholder="Enter Current Password"
            icon={<FaKey />}
          />
          <LabelInput htmlFor="email" textLabel="New Password" />
          <Input
            type="email"
            value={formData.email}
            onChange={(value) => handleChange("email", value)}
            placeholder="Enter New Password"
            icon={<FaKey />}
          />
          <LabelInput htmlFor="username" textLabel="Comfirm New Password " />
          <Input
            type="text"
            value={formData.username}
            onChange={(value) => handleChange("username", value)}
            placeholder="Enter New Password Agian"
            icon={<FaKey />}
          />
          <ButtonAction
            text="Save"
            icon={<FaSignInAlt className="bg-transparent" />}
          />
        </form>
        <span className="flex items-center mr-40 ml-5">
          <p className="my-2">Forgot Password? </p>
          <Link url="reset-password" title="Reset Password" />
        </span>
      </div>
    </AppLayout>
  );
};

export default Setting;
