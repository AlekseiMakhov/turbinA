import React from 'react';
import oferta from '../config/legal-entity-agreement-ru-ru.pdf';

function Feedback() {
    return (
        <form name='feedback' className='feedback'>
            <input className='feedback__input' type='text' required minLength='6' maxLength='40' placeholder='Имя и фамилия автора' />
            <input className='feedback__input' type='email' required placeholder='Почта' />
            <input className='feedback__input' type='phone' required placeholder='Телефон' />
            <textarea className='feedback__input feedback__input_type_text-area' required placeholder='Стихи'></textarea>
            <div className='feedback__button-container'>
                <button className='button button_type_check button_type_dark' type='checkbutton' required></button>
                <p className='feedback__text'>Согласен с &nbsp;
                    <span>
                        <a className='feedback__link' href={oferta}>офертой</a>
                    </span>
                </p>
            </div>    
            <button className='button button_type_dark button_type_submit' type='submit' required>Отправить</button>
        </form>
    );
}

export default Feedback;