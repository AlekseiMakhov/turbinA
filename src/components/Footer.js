import React from 'react';
const plaktikumUrl = 'https://praktikum.yandex.ru/';

function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__text'>© Маршак, 2020.</p>
            <p className='footer__text'>Сделано студентами&nbsp;<span>
                <a href={plaktikumUrl} className='footer__text footer__text_type_link' target='blank'>Яндекс.Практикум</a> 
            </span></p>
        </footer>
    );
}

export default Footer;