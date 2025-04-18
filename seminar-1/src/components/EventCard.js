import React from 'react';
// Seminar Task 5
// 1. Создать функциональный компонент EventCard, который будет отображать
// информацию о событии: название, дату и место проведения. Компонент должен
// принимать эти данные через пропсы.
// 2. В компоненте App, использовать компонент EventCard несколько раз с
// различными данными о событиях, переданными через пропсы, чтобы показать
// список предстоящих событий.
// 3. Добавить минимальную стилизацию для компонента EventCard, используя CSS
// классы, чтобы визуально выделить информацию о каждом событии.

function EventCard({ title, date, place, choice }) {

    return (
        <div>
            <hr></hr>
            <h5 style={{ color: choice ? 'blue' : 'red'}}>Название события: {title}</h5>
            <h5>Дата: {date}</h5>
            <h5>Место проведения: {place}</h5>
        </div>
    );
}

export default EventCard;