import AdminLayout from "../layout/AdminLayout";
import { FaCamera } from "react-icons/fa";
import "./style.scss";
import Box from "../components/Box";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="w-100">
        <div className="grid grid-cols-3 gap-4 mt-5">
          <Box />
          <Box />
          <Box />
          {/* <Box /> */}
        </div>
        <div className="grid grid-cols-3 gap-4 mt-5">
          <Box />
          <Box />
          <Box />
          {/* <Box /> */}
        </div>
        <div className="grid grid-cols-3 gap-4 mt-5">
          <Box />
          <Box />
          <Box />
          {/* <Box /> */}
        </div>
        <div className="grid grid-cols-3 gap-4 mt-5">
          <Box />
          <Box />
          <Box />
          {/* <Box /> */}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
