import { useContext } from "react";
import ViewPortMode from '../contexts/ViewPortMode';

function Logo() {

    const viewPortMode = useContext(ViewPortMode);

    let width = 50;
    let height = 50;

    switch (viewPortMode.mode) {
        case 'S':
            width = 32; 
            height = 32;
            break;    
        default:
            width = 50; 
            height = 50;
            break; 
    }
    
    return(
        <a href='https://marshakbooks.ru/' className='header__logo' target='blank'>
            <svg width={width} height={height} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.98864V26.1364V50H50L48.2249 0H42.3077L40.8284 17.0455H29.2899L28.4024 1.98864L20.1183 1.42045L21.3018 17.0455H8.87574L6.80473 1.42045L0 1.98864Z" fill="white"/>
            </svg>
        </a>
    )
} 

export default Logo;