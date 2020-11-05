import React from 'react';
import Player from './Player';
import Feedback from './Feedback';
import img from '../images/main-title.svg' 
import { 
        INFO_TITLE_1, 
        INFO_TITLE_2,
        INFO_TITLE_3,
        INFO_TITLE_4,
        INFO_PARAGRAPH_1,
        INFO_PARAGRAPH_2,
        INFO_PARAGRAPH_3,
        INFO_PARAGRAPH_4,
        INFO_PARAGRAPH_5,
        INFO_PARAGRAPH_6,
        INFO_PARAGRAPH_7
    } from '../config/config';

function Main({ isMobileMode }) {
    return (
        <>
            <img className='title'src={img} alt='icon'/>
            <Player isMobileMode={isMobileMode}/>
                
            <section className='info'>
                <h2 className='info__title'>{INFO_TITLE_1}</h2>
                <p className='info__paragraph'>{INFO_PARAGRAPH_1}</p>
                <p className='info__paragraph'>{INFO_PARAGRAPH_2}</p>
                <h2 className='info__title'>{INFO_TITLE_2}</h2>
                <p className='info__paragraph'>{INFO_PARAGRAPH_3}</p>
                <h2 className='info__title'>{INFO_TITLE_3}</h2>
                <p className='info__paragraph'>{INFO_PARAGRAPH_4}</p>
                <p className='info__paragraph'>{INFO_PARAGRAPH_5}</p>
                <p className='info__paragraph'>{INFO_PARAGRAPH_6}</p>
                <p className='info__paragraph'>{INFO_PARAGRAPH_7}</p>
                <h2 className='info__title'>{INFO_TITLE_4}</h2>

                <Feedback />

            </section>
        </>
    );
}

export default Main;