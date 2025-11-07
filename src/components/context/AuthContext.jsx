import { createContext, useContext, useState, useEffect } from "react";
import { getAccessToken, clearTokens, login } from "../lib/auth";
import { parseJwt } from "../lib/jwt";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = getAccessToken();
        if (token) {
            const payload = parseJwt(token);
            console.log(payload)
            if (payload) {
                setUser({
                    auth: true,
                    id: parseInt(payload.userid),
                    email: payload.email,
                    firstName: payload.given_name,
                    lastName: payload.family_name
                });
            }
        }
    }, []);


    const handleLogin = async (username, pw) => {
        // login aus lib/auth aufrufen
        const success = await login(username, pw);
        const token = getAccessToken(); // Token nach Login holen
        if (success && token) {
            const payload = parseJwt(token);
            if (payload) {
                setUser({
                    auth: true,
                    id: parseInt(payload.userid),
                    email: payload.email,
                    firstName: payload.given_name,
                    lastName: payload.family_name
                });
            }
        }
        return success;
    };

    const logout = () => {
        clearTokens();
        setUser(null);
        if (typeof window !== 'undefined') {
            // client-only code
            window.location.reload();
        }
    };





    return (
        <AuthContext.Provider value={{ user, logout, login: handleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
