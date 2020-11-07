import React from 'react';
import { useState } from 'react';
import SongListContainer from './SongListContainer';
import SongTextContainer from './SongTextContainer';
import cn from 'classnames'
import CollapseButton from './buttons/CollapseButton';
import ExpandButton from './buttons/ExpandButton';
import PlayButton from './buttons/PlayButton';
import PauseButton from './buttons/PauseButton';

function Player({ isMobileMode }) {

    const [isExpanded, setExpanded] = useState(false);
    const [isSongTextOpen, setSongTextOpen] = useState(false);
    const [isPaused, setIsPaused] = useState(true);

    function handleExpandButtonClick() {
        setExpanded(!isExpanded);
    }

    function handleSwitchButtonClick() {
        setSongTextOpen(!isSongTextOpen);
    }

    function handlePlayPauseButtonClick() {
        setIsPaused(!isPaused);
    }

    return (
        <section className='player-container'>
            <div className={cn('player', { 'player_expanded': isExpanded })}>
                {isPaused ? <PlayButton isMobileMode={isMobileMode} onClick={handlePlayPauseButtonClick} /> : <PauseButton isMobileMode={isMobileMode} onClick={handlePlayPauseButtonClick} />}
                <h3 className='player__text'>Палево - Шаровары Вячеслава</h3>
                <p className='player__text player__text_type_time'>5:22</p>
                <button type='button' className={cn('button button_type_switch', {'button_invisible' : !(isExpanded || isMobileMode)})} onClick={handleSwitchButtonClick}>{isSongTextOpen ? 'Релизы' : 'Текст песни' }</button>
                <div className={cn('container', { 'container_type_expanded': isExpanded })}></div>

                {isExpanded ? <CollapseButton isMobileMode={isMobileMode} onClick={handleExpandButtonClick} /> : <ExpandButton isMobileMode={isMobileMode} onClick={handleExpandButtonClick} />}

                <div className='slider'>
                    <div className='slider__thumb'></div>
                </div>
                <div className={cn('container', { 'container_type_expanded': isExpanded })}>
                    {isSongTextOpen ? <SongTextContainer /> : <SongListContainer />}
                </div>
            </div>
            
        </section>
    );
}

export default Player;