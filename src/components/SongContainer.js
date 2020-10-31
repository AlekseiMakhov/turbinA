import React from 'react';
import Song from './Song';

function SongContainer() {
    return (
        <ul className='songs-container'>
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
        </ul>
    );
}

export default SongContainer;