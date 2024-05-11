import {
  FaCalendar,
  FaCheck,
  FaFilm,
  FaPlane,
  FaSave,
  FaTimes,
  FaTv,
} from "react-icons/fa";
import AppLayout from "../../layout/AppLayout";
import Logo from "../../assets/logo.png";
import { LinkButton } from "../../components/Link";

const Subscription = () => {
  return (
    <AppLayout>
      <div className="flex flex-col w-5/6 m-auto">
        <p className="text-2xl text-start font-bold">
          Choose the plan that's right for you{" "}
        </p>
        <span className="flex items-center space-x-4 mt-2">
          <FaCheck fill="red" />
          <p>More useful than an average user.</p>
        </span>
        <span className="flex items-center space-x-4">
          <FaCheck fill="red" />
          <p>You can cancel your plan anytime.</p>
        </span>
        <div className="my-4">
          <table className="w-full table-auto border-collapse">
            <thead className="">
              <tr>
                <th className="border-b p-0 w-6/12">
                  <img className="h-20" src={Logo} alt="" />
                </th>
                <th className="border-b p-4 w-2/12">
                  <p className="text-sm text-secondary">Bronze</p>
                  <p className="text-3xl text-aprimary">$1.5</p>
                </th>
                <th className="border-b  w-2/12">
                  <p className="text-sm text-secondary">Silver</p>
                  <p className="text-3xl text-aprimary">$2.5</p>
                </th>
                <th className="border-b  w-2/12">
                  <p className="text-sm text-secondary">Gold</p>
                  <p className="text-3xl text-aprimary">$5</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="group">
                <th className="p-4  group-hover:scale-105 bg-transparent group-hover:pl-8">
                  <span className="flex items-center justify-start space-x-4">
                    <FaTv fill="red" />
                    <p>1080 Resolotion</p>
                  </span>
                </th>
                <th className="px-20 group-hover:scale-105 bg-transparent  w-2/12">
                  <FaCheck fill="red" />
                </th>
                <th className="px-20 group-hover:scale-105 bg-transparent  w-2/12">
                  <FaCheck fill="red" />
                </th>
                <th className="px-20 group-hover:scale-105 bg-transparent  w-2/12">
                  <FaCheck fill="red" />
                </th>
              </tr>
              <tr className="group">
                <th className="p-4 group-hover:scale-105 bg-transparent group-hover:pl-8">
                  <span className="flex items-center justify-start space-x-4">
                    <FaSave fill="red" />
                    <p>Limit of Save</p>
                  </span>
                </th>
                <th className=" w-2/12 group-hover:scale-105 bg-transparent ">
                  50
                </th>
                <th className=" w-2/12 group-hover:scale-105 bg-transparent ">
                  100
                </th>
                <th className=" w-2/12 group-hover:scale-105 bg-transparent ">
                  Unlimited
                </th>
              </tr>
              <tr className="group">
                <th className="p-4 group-hover:scale-105 bg-transparent group-hover:pl-8">
                  <span className="flex items-center justify-start space-x-4">
                    <FaFilm fill="red" />
                    <p>Request for New Movie</p>
                  </span>
                </th>
                <th className="px-20 w-2/12 group-hover:scale-105 bg-transparent">
                  <FaTimes fill="gray" />
                </th>
                <th className="px-20 w-2/12 group-hover:scale-105 bg-transparent">
                  <FaTimes fill="gray" />
                </th>
                <th className="px-20  w-2/12 group-hover:scale-105 bg-transparent">
                  <FaCheck fill="red" />
                </th>
              </tr>
              <tr className="group">
                <th className="p-4 group-hover:scale-105 bg-transparent group-hover:pl-8">
                  <span className="flex items-center justify-start space-x-4">
                    <FaFilm fill="red" />
                    <p>Unlimited of Movies and TV-Shows</p>
                  </span>
                </th>
                <th className="px-20 w-2/12 group-hover:scale-105 bg-transparent">
                  <FaCheck fill="red" />
                </th>
                <th className="px-20  w-2/12 group-hover:scale-105 bg-transparent">
                  <FaCheck fill="red" />
                </th>
                <th className="px-20  w-2/12 group-hover:scale-105 bg-transparent">
                  <FaCheck fill="red" />
                </th>
              </tr>
              <tr className="">
                <th className="p-4 group-hover:pl-8"></th>
                <th className="w-2/12 group-hover:scale-105 bg-transparent ">
                  <a
                    href="subscription/Bronze/payment"
                    className="border border-aprimary px-2 p-1 rounded bg-aprimary hover:bg-primary"
                  >
                    Choose
                  </a>
                </th>
                <th className="w-2/12 group-hover:scale-105 bg-transparent">
                  <a
                    href="subscription/Siliver/payment"
                    className="border border-aprimary px-2 p-1 rounded bg-aprimary hover:bg-primary"
                  >
                    Choose
                  </a>
                </th>
                <th className="w-2/12 group-hover:scale-105 bg-transparent">
                  <a
                    href="subscription/Gold/payment"
                    className="border border-aprimary px-2 p-1 rounded bg-aprimary hover:bg-primary"
                  >
                    Choose
                  </a>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
};

export default Subscription;
