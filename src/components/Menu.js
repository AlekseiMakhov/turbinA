import { useContext, useState } from 'react';
import { menuLinks } from '../config/config';
import cn from 'classnames';
import CloseButton from './buttons/CloseButton';
import ViewPortMode from './contexts/ViewPortMode';

function Menu() {

    const viewPortMode = useContext(ViewPortMode);
    const [isClosed, setIsClosed] = useState(true);

    function handleLinksShow() {
        setIsClosed(!isClosed);
    }

    return (

        <div className="header__menu">
            {isClosed 
                ? <button className={cn('button button_type_menu', {'button_invisible' : viewPortMode.mode !== 'S'})} onClick={handleLinksShow}>Стриминги</button>
                : <CloseButton onClick={handleLinksShow}/>
            }
            <div className={cn('header__links', { 'header__links_hidden': (viewPortMode.mode === 'S') && isClosed })}>
                {menuLinks.map((item) => (
                    <a key={item.name} href={item.link} target='blank'>
                        <button className='button button_type_menu'>{item.name}</button>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Menu;