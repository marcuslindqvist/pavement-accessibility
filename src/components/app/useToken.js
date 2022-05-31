import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('pavement-token');
        const userToken = JSON.parse(tokenString);
        if (userToken === null) {
            return undefined;
        } else {
            return userToken.token;
        }
    };
    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        localStorage.setItem('pavement-token', JSON.stringify(userToken));
        setToken(userToken.token);
    };
    return {
        setToken: saveToken,
        token,
    };
}
