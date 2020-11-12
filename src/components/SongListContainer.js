import React, { useState } from 'react';

function SongListContainer(props) {

    // const [isOnPlaying, setIsOnPlaying] = useState(false);

    // function handleSongClick() {
    //     setIsOnPlaying(true)
    // }

    return (
        <>
            <h3 className='player__text'>Релизы:</h3>
            {/* {props.items.map((item) => {
                React.Fragment(
                    <p className='player__text player__text_type_song' onClick={handleSongClick}>{`${item.author} - ${item.title}`}</p>
                )
                })} */}

        </>
    );
}

export default SongListContainer;