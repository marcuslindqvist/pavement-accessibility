import './Menu.css';
import React from 'react';
import { Link } from 'react-router-dom';

function closeThisPage(event) {
    this.props.closeLoginPage(false);
    event.preventDefault();
}

const LoginPage = ({ closeThisPage }) => (
    <div className="login-page">
        <div className="login-page-header">
            <button onClick={closeThisPage}>stäng</button>
        </div>
        <div className="login-page-main">
            <h1>menu</h1>
            <ul>
                <li>
                    <Link to="/" onClick={closeThisPage}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/checklist" onClick={closeThisPage}>
                        Checklist
                    </Link>
                </li>
                <li>Login</li>
            </ul>
        </div>
    </div>
);
export default LoginPage;
