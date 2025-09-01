import React from 'react';
import { useAuth }  from '../auth/AuthContext';

export default function Home() {
    const {user, logout} = useAuth();
    return (
        <div style={{padding: 24}}>
            <h1>Welcome Player {user?.name || user?.email}</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
}