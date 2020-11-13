import { useContext } from "react";
import ViewPortMode from "../contexts/ViewPortMode";

function CollapseButton({ onClick }) {

    const viewPortMode = useContext(ViewPortMode);

    let width = 24;
    let height = 24;

    switch (viewPortMode.mode) {
        case 'S':
            width = 16; 
            height = 16;
            break;    
        default:
            width = 24; 
            height = 24;
            break; 
    }

    return(
        <button className='button button_type_expand' onClick={onClick}>
            <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM10.5867 12L7.05116 8.46447L8.46537 7.05025L12.0009 10.5858L15.5364 7.05025L16.9507 8.46447L13.4151 12L16.9507 15.5355L15.5364 16.9497L12.0009 13.4142L8.46537 16.9497L7.05116 15.5355L10.5867 12Z" fill="white"/>
            </svg>
        </button>
    )
} 

export default CollapseButton;