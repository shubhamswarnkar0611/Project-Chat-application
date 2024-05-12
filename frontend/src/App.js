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
import MakeGroup from "./pages/MakeGroup";

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
          <Route path="/makegroup" element={<MakeGroup />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
