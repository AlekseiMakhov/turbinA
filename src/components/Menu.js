import React, { useState } from 'react';

function Menu(props) {

    const windowInnerWidth = window.innerWidth;

    const [mobileMode, setMobileMode] = useState(false);
    const [isClosed, setIsClosed] = useState(true);

    function defineMode() {
        (windowInnerWidth < 620) ? setMobileMode(true) : setMobileMode(false);
    }

    function handleStreamShowClick() {
        setIsClosed(!isClosed);
    }

    window.addEventListener('resize', defineMode);

    return (
        <ul className="header__menu">
            <li className={`button button_type_menu ${(!mobileMode || !isClosed) ? 'button_invisible' : ''}`} onClick={handleStreamShowClick}>Стриминги</li>
            <li className={`button button_type_menu ${(mobileMode && !isClosed) ? '' : 'button_invisible'}`} onClick={handleStreamShowClick}>Закрыть</li>
            <li className={`button button_type_menu ${(mobileMode && isClosed) ? 'button_invisible' : ''}`}>Яндекс.Музыка ↗</li>
            <li className={`button button_type_menu ${(mobileMode && isClosed) ? 'button_invisible' : ''}`}>Spotify ↗</li>
            <li className={`button button_type_menu ${(mobileMode && isClosed) ? 'button_invisible' : ''}`}>Apple Music ↗</li>
            <li className={`button button_type_menu ${(mobileMode && isClosed) ? 'button_invisible' : ''}`}>VK Music ↗</li>
        </ul>
    );
}

export default Menu;