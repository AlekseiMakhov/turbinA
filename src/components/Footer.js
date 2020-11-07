import React from 'react';
import { plaktikumUrl } from '../config/config';

function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__text'>© Маршак, 2020.</p>
            <p className='footer__text'>Сделано студентами&nbsp;<span>
                <a href={plaktikumUrl} className='footer__link' target='blank'>Яндекс.Практикум</a> 
            </span></p>
        </footer>
    );
}

export default Footer;