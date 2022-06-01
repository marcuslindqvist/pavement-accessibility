import './header.css';
import Menu from '../login/Menu';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    function changeIsMenuOpen() {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen === true) {
            setActiveClass('');
        } else setActiveClass('active');
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeClass, setActiveClass] = useState('');

    return (
        <header className="page-header">
            {isMenuOpen ? (
                <Menu closeThisPage={changeIsMenuOpen} />
            ) : (
                <div></div>
            )}
            <Link to="/">
                <span className="h4" id="logo-text">
                    Pavement
                </span>
            </Link>
            <div>
                <button
                    className={`burger ${activeClass}`}
                    onClick={() => {
                        changeIsMenuOpen();
                    }}
                ></button>
            </div>
        </header>
    );
};
export default Header;
