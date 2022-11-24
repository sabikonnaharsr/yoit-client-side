import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const ProtectedRoutes = ( {children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        <progress className="progress w-56"></progress>
    }
    if(user){
        return children;
    }
    return (
       <Navigate to='/login' state={{from: location}} replace></Navigate>
    );
};

export default ProtectedRoutes;