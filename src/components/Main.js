import React from 'react';
import Player from './Player';
import Feedback from './Feedback';
import { 
        infoTitle1, 
        infoTitle2,
        infoTitle3,
        infoTitle4,
        infoParagraph1,
        infoParagraph2,
        infoParagraph3,
        infoParagraph4,
        infoParagraph5,
        infoParagraph6,
        infoParagraph7
    } from '../config/config';

function Main() {
    return (
        <>
            <div className='title'></div>
            <Player />
                
            <section className='info'>
                <h2 className='info__title'>{infoTitle1}</h2>
                <p className='info__paragraph'>{infoParagraph1}</p>
                <p className='info__paragraph'>{infoParagraph2}</p>
                <h2 className='info__title'>{infoTitle2}</h2>
                <p className='info__paragraph'>{infoParagraph3}</p>
                <h2 className='info__title'>{infoTitle3}</h2>
                <p className='info__paragraph'>{infoParagraph4}</p>
                <p className='info__paragraph'>{infoParagraph5}</p>
                <p className='info__paragraph'>{infoParagraph6}</p>
                <p className='info__paragraph'>{infoParagraph7}</p>
                <h2 className='info__title'>{infoTitle4}</h2>

                <Feedback />

            </section>
        </>
    );
}

export default Main;