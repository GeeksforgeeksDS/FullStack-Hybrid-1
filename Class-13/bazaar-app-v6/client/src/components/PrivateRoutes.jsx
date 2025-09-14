import React from 'react';
import { Outlet, Navigate } from 'react-router';

const PrivateRoutes = ({ isLoggedIn, loading }) => {
    if (loading) {
        return <p>Loading...</p>
    }
    return isLoggedIn ? <Outlet/> : <Navigate replace to="/login"/>
}

export default PrivateRoutes
