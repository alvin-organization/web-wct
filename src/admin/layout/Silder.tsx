import { FaCheckCircle, FaFilm, FaHome, FaTv, FaUser } from "react-icons/fa";
import { Link } from "../../components/Link";

const Silder = () => {
  return (
    <div className="pl-3 h-96 w-64 my-2 ">
      <div className="my-2">
        <Link url="/" title="Home" icon={<FaHome />} />
      </div>
      <div className="my-2">
        <Link url="/" title="Confirm Admin" icon={<FaCheckCircle />} />
      </div>
      <div className="my-2">
        <Link url="/" title="Movies" icon={<FaFilm />} />
      </div>
      <div className="my-2">
        <Link url="/" title="TV-Show" icon={<FaTv />} />
      </div>
      <div className="my-2">
        <Link url="/" title="Users" icon={<FaUser />} />
      </div>
      <div className="my-2">
        <Link url="/" title="Setting" icon={<FaUser />} />
      </div>
    </div>
  );
};

export default Silder;
