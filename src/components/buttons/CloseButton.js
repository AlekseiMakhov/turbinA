import cn from 'classnames';
import { useContext } from 'react';
import ViewPortMode from '../contexts/ViewPortMode';

function CLoseButton({ onClick }) {
    const viewPortMode = useContext(ViewPortMode);
    return(
        <button className={cn('button button_type_close', { 'button_invisible' : viewPortMode.mode !== 'S' })} onClick={onClick}>
            <svg width='10' height='10' viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.707107" y1="1.19231" x2="10.6066" y2="11.0918" stroke="white" stroke-width="2"/>
                <line x1="10.6075" y1="0.707107" x2="0.708003" y2="10.6066" stroke="white" stroke-width="2"/>
            </svg>
        </button>
    )
} 

export default CLoseButton;