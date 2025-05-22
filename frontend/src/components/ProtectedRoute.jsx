import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthCheck } from '../hooks/useAuthCheck';

const ProtectedRoute = ({ children }) => {
  
  const isAuthenticated=useSelector((state)=>state.auth.isAuthenticated);
  const { pathname } = useLocation();
  
  if (!isAuthenticated && pathname !== '/signin' && pathname !== '/signup') {
    return <Navigate to="/signin" />;
  }
  if (isAuthenticated && (pathname === '/signin' || pathname === '/signup')) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
