import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import HomeLayout from "./layout/HomeLayout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* private Route */}
        <Route path="/" element={<ProtectedRoute Page={HomeLayout} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
