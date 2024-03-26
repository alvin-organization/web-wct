import Box from "../components/Box";
import AdminLayout from "../layout/AdminLayout";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="my-2 w-full px-3">
        <p className="text-3xl text-aprimary mb-4">User</p>
        <div className="h-32 w-full my-4 p-0 flex items-center justify-between">
          <Box />
          <Box />
          <Box />
        </div>
        <p className="text-3xl text-aprimary mb-4">Movies</p>
        <div className="h-32 w-full my-4 p-0 flex items-center justify-between">
          <Box />
          <Box />
          <Box />
        </div>
        <p className="text-3xl text-aprimary mb-4">TV-Shows</p>
        <div className="h-32 w-full my-4 p-0 flex items-center justify-between">
          <Box />
          <Box />
          <Box />
        </div>
        <p className="text-3xl text-aprimary mb-4">Request</p>
        <div className="h-32 w-full my-4 p-0 flex items-center justify-between">
          <Box />
          <Box />
          <Box />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
