import React from 'react';
import { useState } from 'react';
import SongListContainer from './SongListContainer';
import SongTextContainer from './SongTextContainer';
import cn from 'classnames'
import CollapseButton from './buttons/CollapseButton';
import ExpandButton from './buttons/ExpandButton';
import PlayButton from './buttons/PlayButton';
import PauseButton from './buttons/PauseButton';
// import { backgroundGenerator } from '../utils/backgroundGenerator'
// import json from '../animations/gradient.json';
// const bg = JSON.parse(json);



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
        // document.querySelector('.page').style.backgroundImage = {bg};
        // document.querySelector('.page').style.backgroundImage = backgroundGenerator({ step: Math.floor(Math.random() * 1535), nextStep: 200 });
    }

    return (
        <>
            <div className={cn('overlay', { 'overlay_visible': isExpanded && isMobileMode })}>

            </div>
            <section className='player-container'>
                <div className={cn('player', { 'player_expanded': isExpanded })}>
                    <div className={cn('player__cover', { 'player__cover_visible': isExpanded || isMobileMode })}></div>
                    {isPaused 
                        ? <PlayButton onClick={handlePlayPauseButtonClick} width={18} height={20} color='#fff' /> 
                        : <PauseButton isMobileMode={isMobileMode} onClick={handlePlayPauseButtonClick} />}
                    <h3 className={cn('player__text', { 'player__text_expanded': isExpanded })}>Палево - Шаровары Вячеслава</h3>
                    <p className={cn('player__text player__text_type_time', { 'player__text_type_expanded-time': isExpanded })}>5:22</p>
                    <div className={cn('player__button-container', {'player__button-container_visible' : isExpanded})}>
                        <button type='button' className={cn('button-with-icon', {'button-with-icon_hidden' : !isSongTextOpen})}>
                            <PlayButton width={9} height={11} color='#000' />
                            <p className='button-with-icon__text'>Клип</p>
                        </button>
                        <button type='button' className='button button_type_switch' onClick={handleSwitchButtonClick}>{isSongTextOpen ? 'Релизы' : 'Текст песни' }</button>
                    </div>

                    <div className={cn('container', { 'container_type_expanded': isExpanded })}></div>

                    {isExpanded ? <CollapseButton isMobileMode={isMobileMode} onClick={handleExpandButtonClick} /> : <ExpandButton isMobileMode={isMobileMode} onClick={handleExpandButtonClick} />}

                    <div className={cn('slider', { 'slider_expanded': isExpanded })}>
                        <div className='slider__thumb'></div>
                    </div>
                    <div className={cn('container', { 'container_type_expanded': isExpanded })}>
                        {isSongTextOpen ? <SongTextContainer /> : <SongListContainer />}
                    </div>
                </div>
                
            </section>
        </>
    );
}

export default Player;