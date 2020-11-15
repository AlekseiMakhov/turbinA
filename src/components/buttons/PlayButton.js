import { useContext } from "react";
import ViewPortMode from "../contexts/ViewPortMode";

function PlayButton({ onClick, color, small }) {

    const viewPortMode = useContext(ViewPortMode);

    let width = 20;
    let height = 16;

    if (small) { 
        switch (viewPortMode.mode) {
            case 'S':
                width = 7; 
                height = 9;
                break;    
            case 'M':
                width = 8; 
                height = 10;
                break; 
            case 'L':
                width = 9; 
                height = 11;
                break;    
            default:
                width = 9; 
                height = 11;
                break; 
        }
    } else {
        switch (viewPortMode.mode) {
            case 'S':
                width = 16; 
                height = 13;
                break;    
            case 'M':
                width = 18; 
                height = 15;
                break; 
            case 'L':
                width = 18; 
                height = 15;
                break;    
            default:
                width = 20; 
                height = 16;
                break; 
        }
    }    

    return(
        <button className='button button_type_play' onClick={onClick}>
            <svg width={width} height={height} viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3505 7.76283C14.2165 8.34867 14.2165 9.65133 13.3505 10.2372L2.24182 17.7525C1.28068 18.4027 -7.73515e-07 17.696 -7.21907e-07 16.5153L-6.48979e-08 1.48469C-1.32898e-08 0.304034 1.28068 -0.402717 2.24182 0.247521L13.3505 7.76283Z" fill={color}/>
            </svg>
        </button>
    )
} 

export default PlayButton;