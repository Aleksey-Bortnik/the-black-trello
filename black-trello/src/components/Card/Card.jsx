import React from 'react';
import './Card.scss';

export default function Card() {
    return (
        <>
        <div className='card__container'>
            <div className='card__content'>
                <h3>Card Title</h3>
                <textarea className='card__comment'></textarea>
            </div>
        </div>
        </>
    );
}

