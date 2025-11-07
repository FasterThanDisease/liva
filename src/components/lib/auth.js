import { getCookie, setCookie, deleteCookie } from "./cookies";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";



export function setTokens(tokens) {
    setCookie("accessToken", tokens.accesstoken, 1); // 1 Tag gültig
    setCookie("refreshToken", tokens.refreshtoken, 7); // 7 Tage gültig
}

export function clearTokens() {
    deleteCookie("accessToken");
    deleteCookie("refreshToken");

}

export function getAccessToken() {
    return getCookie("accessToken");
}

export function getRefreshToken() {
    return getCookie("refreshToken");
}


// Login
export const login = async (username, password) => {
    const res = await fetch(`${API_BASE}/security/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY
        },
        body: JSON.stringify({ username, password })
    });



    if (!res.ok) return false;

    const data = await res.json();
    console.log(data)
    const { accesstoken, refreshtoken } = data
    const tokens = { accesstoken, refreshtoken }
    console.log(tokens)
    setTokens(tokens);
    return true;
};

// Refresh Token
export const refreshToken = async () => {
    const refresh = getRefreshToken();
    if (!refresh) return false;

    const res = await fetch(`${API_BASE}/auth/refresh`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY
        },
        body: JSON.stringify({ refreshToken: refresh, accessToken: "" })
    });

    if (!res.ok) {
        clearTokens();
        return false;
    }

    const tokens = await res.json();
    setTokens(tokens);
    return true;
};
