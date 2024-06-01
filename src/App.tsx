import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ResetPassword from "./pages/reset_password/ResetPassword";
import NewPassword from "./pages/reset_password/NewPassword";
import NotFoundPage from "./pages/NotFoundPage";
import SignUpAdmin from "./admin/pages/SignUpAdmin";
import SignInAdmin from "./admin/pages/SignInAdmin";
import AdminRequest from "./admin/pages/AdminRequest";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminMovies from "./admin/pages/AdminMovies";
import UploadMovies from "./admin/pages/adminMovies/UploadMovies";
import Explore from "./pages/Explore";
import MovieDetail from "./pages/movies/inside_movie/MovieDetail";
import MoviePlay from "./pages/movies/inside_movie/MoviePlay";
import Profile from "./user/Profile";
import Setting from "./user/Setting";
import Subscription from "./user/subscription/Subscription";
import PaymentForm from "./user/subscription/Payment";
import AText from "./components/AText";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/movies/MoviesPage";
import MoviesGenrePage from "./pages/movies/MoviesGenrePage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Guest */}
        <Route path="/" element={<HomePage />} />
        <Route path="/:page" element={<MoviesPage />} />
        <Route path="/:page/:genre" element={<MoviesGenrePage />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/reset-password/new-password/:token"
          element={<NewPassword />}
        />
        <Route path="/explore" element={<Explore />} />

        {/* Movie */}
        <Route path="/movies/:movieName/detail" element={<MovieDetail />} />
        <Route path="/movies/:movieName/play" element={<MoviePlay />} />

        {/* User */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/setting" element={<Setting />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/subscription/:plan/payment" element={<PaymentForm />} />

        {/* Routes for Admin */}
        <Route path="/admins/signup" element={<SignUpAdmin />} />
        <Route path="/admins/signin" element={<SignInAdmin />} />
        <Route path="/admins/dashboard" element={<AdminDashboard />} />
        <Route path="/admins/admin-request" element={<AdminRequest />} />
        <Route path="/admins/movies" element={<AdminMovies />} />
        <Route path="/admins/upload" element={<UploadMovies />} />

        <Route path="/tests" element={<AText />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
