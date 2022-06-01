import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(loginDetails) {
    return fetch('/login', {
        method: 'POST',
        body: loginDetails,
    }).then((data) => data.json());
}

const Login = ({ setToken, setUser }) => {
    const [username] = useState();
    const [password] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password,
        });
        setToken(token);
        setUser(username);
    };

    return (
        <div className="login-page">
            <div className="form">
                <h1>Logga in</h1>
                <form onSubmit={handleSubmit}>
                    <label>Användarnamn</label>
                    <input type="text" name="uname" required />
                    <label>Lösenord</label>
                    <input type="password" name="pass" required />
                    <button type="submit" className="btn login">
                        Logga in
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Login;

Login.propTypes = {
    setToken: PropTypes.func.isRequired,
};
