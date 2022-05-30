import './header.css';
import Menu from '../login/Menu';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    function changeIsMenuOpen() {
        setIsMenuOpen(!isMenuOpen);
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            {isMenuOpen ? (
                <Menu closeThisPage={changeIsMenuOpen} />
            ) : (
                <div></div>
            )}
            <header>
                <Link to="/">
                    <h1>Pavement</h1>
                </Link>
                <button onClick={changeIsMenuOpen}>Menu</button>
            </header>
        </div>
    );
};
export default Header;
