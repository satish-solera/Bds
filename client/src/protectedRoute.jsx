
import {useNavigate} from 'react-router-dom';
import { useAuth } from './context/auth.context';
import React from 'react';

const protectedRoute = ({childern}) =>{
    const navigate = useNavigate()
    const {isAuthenticated} = useAuth();
    
    return isAuthenticated ? childern : navigate('/login')
}
export default protectedRoute;