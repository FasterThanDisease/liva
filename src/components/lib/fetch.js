import { getAccessToken, refreshToken, setTokens } from "./auth";

export const authFetch = async (url, options = {}) => {
    let accessToken = getAccessToken();

    const headers = {
        ...options.headers,
        "Content-Type": "application/json",
        "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY
    };

    if (accessToken) headers["Authorization"] = `Bearer ${accessToken}`;

    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, { ...options, headers });

    if (res.status === 401) {
        const refreshed = await refreshToken();
        if (refreshed) {
            accessToken = getAccessToken();
            headers["Authorization"] = `Bearer ${accessToken}`;
            res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, { ...options, headers });
        }
    }

    return res;
};
