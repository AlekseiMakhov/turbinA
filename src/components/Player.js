import React from 'react';
import Song from './Song';
import SongContainer from './SongContainer';

function Player() {
    return (
        <>
            <section className='player'>
                <button type='button' className='button button_type_play'></button>
                <Song />
                <button type='button' className='button button_type_switch-button'>text</button>
                <button type='button' className='button button_type_expand'></button>
            </section>
            <SongContainer />
        </>
    );
}

export default Player;