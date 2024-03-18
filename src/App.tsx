import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ComponentTest from "./components/ComponentTest";
import SignUp from "./pages/signup/SignUp";
import SignIn from "./pages/signin/SignIn";
import HomeScreen from "./pages/home/HomeScreen";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/component-test" element={<ComponentTest />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
