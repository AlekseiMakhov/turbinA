import React from 'react';
import { useState } from 'react';
import SongListContainer from './SongListContainer';
import SongTextContainer from './SongTextContainer';


function Player({ isMobileMode }) {

    const [isExpanded, setExpanded] = useState(false);
    const [isSongTextOpen, setSongTextOpen] = useState(false);

    function handleExpandButtonClick() {
        setExpanded(!isExpanded);
    }

    function handleSwitchButtonClick() {
        setSongTextOpen(!isSongTextOpen);
    }

    return (
        <section className='player-container'>
            <div className={`player ${isExpanded ? 'player_expanded' : ''}`}>
                <button type='button' className='button button_type_play'></button>
                <h3 className='player__text'>Палево - Шаровары Вячеслава</h3>
                <p className='player__text player__text_type_time'>3:22</p>
                {(isExpanded || isMobileMode) && <button id='switch' type='button' className='button button_type_switch' onClick={handleSwitchButtonClick}>{isSongTextOpen ? 'Релизы' : 'Текст песни' }</button>}
                <button type='button' id='expand' className={`button ${isExpanded ? 'button_type_collapse' : 'button_type_expand'}`} onClick={handleExpandButtonClick}></button>
                <div className='slider'>
                    <div className='slider__thumb'></div>
                </div>
                <div className={`container ${isExpanded ? 'container_type_expanded' : ''}`}>
                    {isSongTextOpen ? <SongTextContainer /> : <SongListContainer />}
                </div>
            </div>
            
        </section>
    );
}

export default Player;