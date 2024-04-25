import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ComponentTest from "./components/ComponentTest";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import HomeScreen from "./pages/HomeScreen";
import ResetPassword from "./pages/reset_password/ResetPassword";
import NewPassword from "./pages/reset_password/NewPassword";
import MoviesGenre from "./pages/movies/MoviesGenre";
import NotFoundPage from "./pages/NotFoundPage";
import SignUpAdmin from "./admin/pages/SignUpAdmin";
import SignInAdmin from "./admin/pages/SignInAdmin";
import AdminRequest from "./admin/pages/AdminRequest";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminMovies from "./admin/pages/AdminMovies";
import UploadMovies from "./admin/pages/adminMovies/UploadMovies";
import MoviesList from "./pages/movies/MoviesList";
import Explore from "./pages/Explore";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/component-test" element={<ComponentTest />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/reset-password/new-password/:token"
          element={<NewPassword />}
        />
        <Route path="/movies" element={<MoviesList />} />
        <Route path="/movies/:genre" element={<MoviesGenre />} />
        <Route path="/explore" element={<Explore />} />

        {/* Routes for Admin */}
        <Route path="/admins/signup" element={<SignUpAdmin />} />
        <Route path="/admins/signin" element={<SignInAdmin />} />
        <Route path="/admins/dashboard" element={<AdminDashboard />} />
        <Route path="/admins/admin-request" element={<AdminRequest />} />
        <Route path="/admins/movies" element={<AdminMovies />} />
        <Route path="/admins/upload" element={<UploadMovies />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
