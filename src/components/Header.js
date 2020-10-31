import React from 'react';
import logo from '../images/logo.svg';
import Menu from './Menu';

function Header() {
    return (
        <header className='header'>
            <img className='header__logo' src={logo}/>
            <Menu />
        </header>
    );
}

export default Header;