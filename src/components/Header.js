import { useState } from 'react';
import logo from '../images/logo.svg';
import Menu from './Menu';

function Header(props) {

    return (
        <header className='header'>
            <h1>
                <img className='header__logo' src={logo} alt='турбина' />
            </h1>
            <Menu isMobileMode={props.isMobileMode} />
        </header>
    );
}

export default Header;