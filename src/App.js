import './App.css';
import React, { useEffect, useState } from 'react';

export default function App() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeUser, setActiveUser] = useState({});

    useEffect(() => {
        const userExists = window.localStorage.getItem('pavement-user');

        if (userExists) {
            setActiveUser(userExists);
        }
    }, []);

    // User Login info
    const database = [
        {
            username: 'user1',
            password: 'pass1',
        },
    ];

    const errors = {
        uname: 'invalid username',
        pass: 'invalid password',
    };

    const handleSignUp = (event) => {
        event.preventDefault();

        const { uname, pass } = document.forms[1];

        const userData = database.find((user) => user.username === uname.value);

        if (!userData) {
            database.push({
                username: uname.value,
                password: pass.value,
            });
            console.log('Du har lagts till i databasen. logga in');
        } else {
            console.log('du har redan ett konto, logga in istället');
        }
    };

    const handleLogin = (event) => {
        //Prevent page reload
        event.preventDefault();

        const { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: 'pass', message: errors.pass });
            } else {
                setIsSubmitted(true);
                setActiveUser({
                    username: uname.value,
                });
                window.localStorage.setItem('pavement-user', uname.value);
            }
        } else {
            // Username not found
            setErrorMessages({ name: 'uname', message: errors.uname });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderSignInForm = (
        <div className="form">
            <form onSubmit={handleLogin}>
                <label>
                    Användarnamn
                    <input type="text" name="uname" required />
                </label>
                {renderErrorMessage('uname')}

                <label>
                    Lösenord
                    <input type="password" name="pass" required />
                </label>
                <label>
                    kom ihåg mig
                    <input type="checkbox" />
                </label>
                {renderErrorMessage('pass')}

                <button type="submit">Skicka</button>
            </form>
        </div>
    );

    return (
        <div className="app">
            <h4>Välkommen {activeUser.username}</h4>
            <div className="login-form">
                <div className="title">Logga in</div>
                {isSubmitted ? <div>Välkommen </div> : renderSignInForm}
            </div>
            <div className="signup-form">
                <div className="title">Skapa konto</div>
                <form onSubmit={handleSignUp}>
                    <label htmlFor="username">
                        Användarnamn:
                        <input
                            type="text"
                            name="uname"
                            id="username"
                            required
                        />
                    </label>
                    <label htmlFor="password">
                        Lösenord
                        <input
                            type="password"
                            name="pass"
                            id="password"
                            required
                        />
                    </label>
                    <button type="submit">Skicka</button>
                </form>
            </div>
        </div>
    );
}
