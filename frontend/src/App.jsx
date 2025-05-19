import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import Homepage from './pages/HomePage.jsx';
import NavBar from './components/NavBar.jsx';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}
