import {
  FaCog,
  FaExclamationCircle,
  FaMoneyBill,
  FaSave,
  FaSignOutAlt,
  FaSync,
} from "react-icons/fa";
import { Label } from "../components/Label";
import AppLayout from "../layout/AppLayout";

const Profile = () => {
  return (
    <AppLayout>
      <div className="flex flex-col items-center w-1/2 m-auto">
        <Label textLabel="Profile" />
        <div className="my-4">
          <img
            className="w-32 h-32 rounded-full border"
            src="https://static.vecteezy.com/system/resources/previews/011/675/365/original/man-avatar-image-for-profile-png.png"
          />
          <p className="text-center text-xl font-bold my-2">Username</p>
        </div>
        <div className="gird">
          <a
            href="profile/setting"
            className="flex items-center justify-start space-x-4 border-b pr-40 py-4"
          >
            <FaCog />
            <p>Setting</p>
          </a>
          <a
            href="subscription"
            className="flex items-center justify-between  border-b  py-4  "
          >
            <span className="flex items-center space-x-4 ">
              <FaMoneyBill />
              <p>Subscription</p>
            </span>
            <span>
              <FaExclamationCircle fill="red" />
            </span>
          </a>
          <a
            href="#"
            className="flex items-center justify-start space-x-4 border-b  py-4  "
          >
            <FaSave />  
            <p>Save</p>
          </a>
          <a
            href="#"
            className="flex items-center justify-start space-x-4 border-b  py-4  "
          >
            <FaSync />
            <p>Request Movie</p>
          </a>
          <a
            href="#"
            className="flex items-center justify-start space-x-4 border-b py-4  "
          >
            <FaSignOutAlt />
            <p>Sign Out</p>
          </a>
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
