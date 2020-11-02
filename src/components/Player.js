import React from 'react';
import Song from './Song';
import { useState } from 'react';
import Container from './Container';


function Player(props) {

    const [isExpanded, setExpanded] = useState(false);

    function handleExpandButtonClick() {
        setExpanded(!isExpanded);
    }

    return (
        <>
            <section className={`player ${isExpanded ? 'player_expanded' : ''}`}>
                <button type='button' className='button button_type_play'></button>
                <Song isExpanded={isExpanded} text='Releases' />
                
                <button type='button' id='expand' className={`button ${isExpanded ? 'button_type_collapse' : 'button_type_expand'}`} onClick={handleExpandButtonClick}></button>
            </section>

            {isExpanded && <Container />}
        </>
    );
}

export default Player;