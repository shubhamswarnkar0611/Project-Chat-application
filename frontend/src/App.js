import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import HomeLayout from "./layout/HomeLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import MainContent from "./components/MainContent";
import GroupChat from "./pages/GroupChat";
import PrivateChat from "./pages/PrivateChat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<ProtectedRoute Page={HomeLayout} />}>
          {/* Define your routes within the protected route */}
          <Route path="/group" element={<GroupChat />} />
          <Route path="/" element={<PrivateChat />} />
        </Route>
      </Routes>
      <MainContent />
    </Router>
  );
}

export default App;
