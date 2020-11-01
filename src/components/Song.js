import React from 'react';

function Song() {
    return (
        <div className='song'>
            <h3 className='song__text song__text_scrolled'>Назвsdgeeeeegsdffffffffffffffffание песни, автор</h3>
            <p className='song__text'>3:22</p>
            <div>
                <button className='song__ruler'>
                    <div className='song__ruler song__ruler_type_passed'></div>
                </button>
                <button type='button' className='button button_type_switch-button button_invisible'>text</button>
            </div>
        </div>
    );
}

export default Song;