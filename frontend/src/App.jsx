import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import NavBar from './components/NavBar.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { useAuthCheck } from './hooks/useAuthCheck.jsx';
import DashboardLayout from './components/DashBoardLayout.jsx';
import HomePage from './pages/HomePage.jsx';

export default function App() {
  const {ischecking}=useAuthCheck();
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signin" element={<ProtectedRoute children={<SignIn />} /> } />
        <Route path="/signup" element={<ProtectedRoute children={<SignUp />} />} />
        <Route path="/dashboard" element={<ProtectedRoute children={<DashboardLayout />} />}  />
      </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}
