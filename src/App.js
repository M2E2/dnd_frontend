import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Login from "./pages/Login";
import Home from "./pages/Home";
import RequireAuth from "./auth/RequireAuth";

import './styles/App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}