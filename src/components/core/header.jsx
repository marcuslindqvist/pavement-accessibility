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
                <button
                    className={`burger ${activeClass}`}
                    onClick={() => {
                        changeIsMenuOpen();
                    }}
                ></button>
            </header>
        </div>
    );
};
export default Header;
