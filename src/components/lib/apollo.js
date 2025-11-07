// utils/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getAccessToken } from "./auth";

const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
    credentials: "include",
});

const apiKey = process.env.NEXT_PUBLIC_API_KEY

// Header-Link für Authorization
const authLink = setContext((_, { headers }) => {
    const token = getAccessToken();
    return {
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token ?? ''}` : "",
            "X-API-KEY": apiKey || "",
        },
    };
});



const Client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default Client;
