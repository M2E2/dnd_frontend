import React, {createContext, useContext, useEffect, useState} from "react";    

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //All'avvio prova a leggere la sessione dal cookie
    useEffect(() => {
        fetch("/api/me", {credentials: "include"})
        .then(r => r.ok ? r.json() : Promise.reject(""))
        .then(d => setUser(d.user))
        .catch(() => setUser(null))
        .finally(() => setLoading(false));
    }, []);

    //LOGIN FUNCTION
    async function login(email, password) {
        const r = await fetch ('/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({email, password})
        });
        if(!r.ok) throw new Error("Bad credentials");
        const me = await fetch("/api/me", {credentials: "include"}).then(x => x.json());
        setUser(me.user);
    }

    //LOGOUT FUNCTION
    async function logout() {
        await fetch("/api/logout", {method: "POST", credentials: "include"});
        setUser(null);
    }
     
    return <AuthContext.Provider value={{user, loading, login, logout}}> {children} </AuthContext.Provider>;
}