import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ComponentTest from "./components/ComponentTest";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import HomeScreen from "./pages/HomeScreen";
import ResetPassword from "./pages/reset_password/ResetPassword";
import NewPassword from "./pages/reset_password/NewPassword";
import MoviesGenre from "./pages/MoviesGenre";
import NotFoundPage from "./pages/NotFoundPage";
import LoginForm from "./pages/LoginForm";
import SignUpAdmin from "./admin/pages/SignUpAdmin";
import SignInAdmin from "./admin/pages/SignInAdmin";
import AdminLayout from "./admin/layout/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
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
        <Route path="/movies" element={<MoviesGenre />} />
        <Route path="/test" element={<Dashboard />} />

        {/* Route Admin */}
        <Route path="admins/signup" element={<SignUpAdmin />} />
        <Route path="admins/signin" element={<SignInAdmin />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
