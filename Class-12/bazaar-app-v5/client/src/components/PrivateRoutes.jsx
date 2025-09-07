import React from 'react';
import { Outlet, Navigate } from 'react-router';

const PrivateRoutes = ({isLoggedIn}) => {
  return isLoggedIn ? <Outlet/> : <Navigate replace to="/login"/>
}

export default PrivateRoutes
