import React from "react";
import {Navigate, useLocation} from "react-router-dom";
import {useAuth } from "./AuthContext";

export default function RequireAuth({children}) {
    const {user, loading} = useAuth();
    const loc = useLocation();
    if(loading) return <div style={{padding: 16}}>Loading...</div>;
    return user ? children : <Navigate to="/login" state={{from: loc}} replace />;
}
