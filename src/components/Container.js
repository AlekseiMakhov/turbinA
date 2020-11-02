import React from 'react';
// import Song from './Song';
import gif from '../images/player/playing-gif.gif';

function SongContainer({ isExpanded }) {
    let className = 'container';

    if (isExpanded) {
       className = 'container container_expanded'     
    } else {
        setTimeout(() => {
            className = 'container'
            return className;
        }, 10000);
    }
    console.log(isExpanded)
    console.log(className)
    return (
        
        // <div className={`container ${isExpanded ? 'container_expanded' : ''}`}>
        <div className={className}>
            <div className='song song_list-element'>
                <img className='song__playing-state' src={gif}/>
                <h3 className='song__text'>Автор - наименование песни</h3>
            </div>    
        </div>
    );
}

export default SongContainer;