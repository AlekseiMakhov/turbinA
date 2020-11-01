import React from 'react';

function Song() {
    return (
        <div className='song'>
            <h3 className='song__text'>Название песни, автор</h3>
            <p className='song__text'>3:22</p>
            <div>
                <div className='song__ruler'></div>
                <div className='song__ruler song__ruler_type_passed'></div>
            </div>
        </div>
    );
}

export default Song;