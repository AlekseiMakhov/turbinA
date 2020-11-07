import React, { useState } from 'react';
import { menuLinks } from '../config/config';
import cn from 'classnames';
import CloseButton from './buttons/CloseButton';

function Menu({ isMobileMode }) {

    const [isClosed, setIsClosed] = useState(true);

    function handleLinksShowClick() {
        setIsClosed(!isClosed);
    }

    return (

        <div className="header__menu">
            <button className={cn('button button_type_menu', {'button_invisible' : (!isMobileMode || !isClosed)})} onClick={handleLinksShowClick}>Стриминги</button>
            <CloseButton isClosed={isClosed} isMobileMode={isMobileMode} onClick={handleLinksShowClick}/>

            <div className={cn('header__links', { 'header__links_hidden': isMobileMode && isClosed })}>
                {menuLinks.map((item) => {
                    return (
                        <a key={item.name} href={item.link} target='blank'>
                            <button className='button button_type_menu'>{item.name}</button>
                        </a>
                    )
                })}
            </div>
        </div>
    );
}

export default Menu;