import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(loginDetails) {
    return fetch('/login', {
        method: 'POST',
        body: loginDetails,
    }).then((data) => data.json());
}

const Login = ({ setToken }) => {
    const [username] = useState();
    const [password] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password,
        });
        setToken(token);
    };
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label>
                    Användarnamn
                    <input type="text" name="uname" required />
                </label>

                <label>
                    Lösenord
                    <input type="password" name="pass" required />
                </label>
                <button type="submit">Skicka</button>
            </form>
        </div>
    );
};
export default Login;

Login.propTypes = {
    setToken: PropTypes.func.isRequired,
};
