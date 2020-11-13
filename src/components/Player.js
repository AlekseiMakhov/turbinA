import React, { useContext } from 'react';
import { useState } from 'react';
import SongListContainer from './SongListContainer';
import SongTextContainer from './SongTextContainer';
import cn from 'classnames'
import CollapseButton from './buttons/CollapseButton';
import ExpandButton from './buttons/ExpandButton';
import PlayButton from './buttons/PlayButton';
import PauseButton from './buttons/PauseButton';
import ViewPortMode from './contexts/ViewPortMode';

function Player() {

    const viewPortMode = useContext(ViewPortMode);

    const [isSongTextOpen, setSongTextOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    function handleExpandButtonClick() {
        setIsExpanded(!isExpanded);
    }

    function handleSwitchButtonClick() {
        setSongTextOpen(!isSongTextOpen);
    }

    function handlePlayingState() {
        setIsPlaying(!isPlaying);
    }

    return (
        <>
        <div className={cn('overlay', { 'overlay_visible': isExpanded && viewPortMode.mode === 'S' })}></div>
            <section className='player-container'>
                <div className={cn('player', { 'player_expanded': isExpanded })}>
                    <div className={cn('player__cover', { 'player__cover_visible': isExpanded || viewPortMode.mode === 'S' })}></div>
                    {isPlaying 
                        ? <PauseButton onClick={handlePlayingState} />
                        : <PlayButton onClick={handlePlayingState} color='#fff' small={false} />
                    }    
                    <h3 className={cn('player__text', { 'player__text_expanded': isExpanded })}>Палево - Шаровары Вячеслава</h3>
                    <p className={cn('player__text player__text_type_time', { 'player__text_type_expanded-time': isExpanded })}>5:22</p>
                    <div className={cn('player__button-container', {'player__button-container_visible' : isExpanded})}>
                        <button type='button' className={cn('button-with-icon', {'button-with-icon_hidden' : !isSongTextOpen})}>
                            <PlayButton color='#000' small={true} />
                            <p className='button-with-icon__text'>Клип</p>
                        </button>
                        <button type='button' className='button button_type_switch' onClick={handleSwitchButtonClick}>{isSongTextOpen ? 'Релизы' : 'Текст песни' }</button>
                    </div>

                    <div className={cn('container', { 'container_type_expanded': isExpanded })}></div>

                    {isExpanded 
                        ? <CollapseButton onClick={handleExpandButtonClick} /> 
                        : <ExpandButton onClick={handleExpandButtonClick} />}

                    <div className={cn('slider', { 'slider_expanded': isExpanded })}>
                        <div className='slider__thumb'></div>
                    </div>
                    <div className={cn('container', { 'container_type_expanded': isExpanded })}>
                        {isSongTextOpen 
                            ? <SongTextContainer /> 
                            : <SongListContainer />}
                    </div>
                </div>
                
            </section>
        </>
    );
}

export default Player;