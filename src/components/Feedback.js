import React from 'react';
import ofertaDoc from '../config/legal-entity-agreement-ru-ru.pdf';

function Feedback() {

    const handleFormSubmit = e => {
        e.preventDefault();
    }
    return (
        <form name='feedback' className='feedback' onSubmit={handleFormSubmit}>
            <input className='feedback__input' type='text' required minLength='6' maxLength='40' placeholder='Имя и фамилия автора' />
            <input className='feedback__input' type='email' required placeholder='Почта' />
            <input className='feedback__input' type='phone' required placeholder='Телефон' />
            <textarea className='feedback__input feedback__input_type_text-area' required placeholder='Стихи'></textarea>
            <div className='feedback__button-container'>
                <button className='button button_type_check button_type_dark' type='button' required></button>
                <p className='feedback__text'>Согласен с&nbsp;</p>
                <a className='feedback__link' href={ofertaDoc}>офертой</a>
            </div>    
            <button className='button button_type_dark button_type_submit' type='submit' onSubmit={handleFormSubmit}>Отправить</button>
        </form>
    );
}

export default Feedback;