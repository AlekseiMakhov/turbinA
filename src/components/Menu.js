import React, { useState } from 'react';
import closeIcon from '../images/close-icon.svg';

function Menu(props) {

    const windowInnerWidth = window.innerWidth;

    const [mobileMode, setMobileMode] = useState(false);
    const [isClosed, setIsClosed] = useState(true);

    function defineMode() {
        (windowInnerWidth < 620) ? setMobileMode(true) : setMobileMode(false);
        setIsClosed(true);
    }

    function handleStreamShowClick() {
        setIsClosed(!isClosed);
    }

    window.addEventListener('resize', defineMode);
    console.log('isClosed', isClosed);
    console.log('mobileMode', mobileMode);
    return (

        <nav className="header__menu">
            <div className={`button button_type_menu ${(!mobileMode || !isClosed) ? 'button_invisible' : ''}`} onClick={handleStreamShowClick}>Стриминги</div>
            <div className={`button button_type_menu ${(mobileMode && !isClosed) ? '' : 'button_invisible'}`} onClick={handleStreamShowClick}>
                <img src={closeIcon} />
            </div>

            <div className={`header__links ${(mobileMode && isClosed) ? 'header__links_hidden' : ''}`}>
                <a className={`button button_type_menu`}>Яндекс.Музыка ↗</a>
                <a className={`button button_type_menu`}>Spotify ↗</a>
                <a className={`button button_type_menu`}>Apple Music ↗</a>
                <a className={`button button_type_menu`}>VK Music ↗</a>
            </div>
        </nav>
    );
}

export default Menu;