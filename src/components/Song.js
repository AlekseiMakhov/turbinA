import React from 'react';


function Song({ isExpanded }) {
    return (
        <div className={`song ${isExpanded ? '' : 'song_type_collapse'}`}>
            <h3 className='song__text'>Author - Song title</h3>
            <p className='song__text'>3:22</p>
            <div className='ruler__container'>
                <div className='song__ruler'> </div>
                    {/* <div className='song__ruler song__ruler_type_passed'></div>
                </button> */}
                {/* {isExpanded && <button id='switch' type='button' className='button button_type_switch'>{text}</button>} */}
                
            </div>
        </div>
    );
}

export default Song;