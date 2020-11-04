import React, { useState } from 'react';
import closeIcon from '../images/close-icon.svg';

function Menu({ isMobileMode }) {

    const [isClosed, setIsClosed] = useState(true);

    function handleLinksShowClick() {
        setIsClosed(!isClosed);
    }

    return (

        <div className="header__menu">
            <div className={`button button_type_menu ${(!isMobileMode || !isClosed) ? 'button_invisible' : ''}`} onClick={handleLinksShowClick}>Стриминги</div>
            <div className={`button button_type_menu ${(isMobileMode && !isClosed) ? '' : 'button_invisible'}`} onClick={handleLinksShowClick}>
                <img src={closeIcon} alt='#'/>
            </div>

            <div className={`header__links ${(isMobileMode && isClosed) ? 'header__links_hidden' : ''}`}>
                <a href='https://praktikum.yandex.ru/profile/web/' className={`button button_type_menu`}>Яндекс.Музыка ↗</a>
                <a href='https://praktikum.yandex.ru/profile/web/' className={`button button_type_menu`}>Spotify ↗</a>
                <a href='https://praktikum.yandex.ru/profile/web/' className={`button button_type_menu`}>Apple Music ↗</a>
                <a href='https://praktikum.yandex.ru/profile/web/' className={`button button_type_menu`}>VK Music ↗</a>
            </div>
        </div>
    );
}

export default Menu;