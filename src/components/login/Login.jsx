import React, { useState } from 'react';

const Login = () => {
    return (
        <div className="form">
            <form>
                <label>
                    Användarnamn
                    <input type="text" name="uname" required />
                </label>

                <label>
                    Lösenord
                    <input type="password" name="pass" required />
                </label>
                <label>
                    kom ihåg mig
                    <input type="checkbox" />
                </label>

                <button type="submit">Skicka</button>
            </form>
        </div>
    );
};
export default Login;
