import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Login() {
    const { login }  = useAuth();
    const nav = useNavigate(); 
    const loc = useLocation();
    const from = loc.state?.from?.pathname || "/home";
    const [email, setEmail] = useState("dndcompaniontest@gmail.com");
    const [password, setPassword] = useState("DndTest2025!");
    const [err, setErr] = useState("");

    async function onSubmit(e) {
        e.preventDefault();
        setErr("");
        try {
            await login(email, password);
            nav(from, {replace: true});
        } catch (e) {
            setErr(e.message || "Login failed");
        }
    }

    return (
        <form onSubmit={onSubmit} style={{maxWidth: 400, margin: "auto", padding: 16}}>
            <h2>Login</h2>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email'/>
            <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />
            <button type="submit" style={{marginTop: 8}}>Login</button>
            {err && <div style={{marginBottom: 8, color: "crimson"}}>{err}</div>}
        </form>
    )

}
