import { useState } from 'react';
import logo from '../images/logo.svg';
import Menu from './Menu';

function Header() {

    const [mobileMode, setMobileMode] = useState(false);

    function setViewPortMode() {
        (window.innerWidth <= 768) ? setMobileMode(true) : setMobileMode(false);
    }
    document.addEventListener('DOMContentLoaded', setViewPortMode);
    window.addEventListener('resize', setViewPortMode);

    return (
        <header className='header'>
            <h1>
                <img className='header__logo' src={logo} alt='турбина' />
            </h1>
            <Menu isMobileMode={mobileMode} />
        </header>
    );
}

export default Header;