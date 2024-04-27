import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const ProtectedRoute = ({ Page }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    
  }

  // Render Page as a component
  return (
    <>
      <Page />
    </>
  );
};

export default ProtectedRoute;
