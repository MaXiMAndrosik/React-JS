import React from 'react';
// Seminar Task 3
// 1. Создать функциональный компонент CurrentTime, который будет
// отображать текущее время, форматированное в удобочитаемом виде
// (например, "Текущее время: 14:35").
// 2. Использовать объект Date для получения текущего времени и метод
// toLocaleTimeString() для его форматирования.
// 3. Импортировать компонент CurrentTime в App.js и использовать его
// внутри компонента App, чтобы отобразить текущее время на странице.
// 4. Добавить минимальную стилизацию для компонента CurrentTime,
// чтобы выделить отображаемое время (например, использовать <h2>
// для заголовка и немного CSS для улучшения внешнего вида).

function CurrentTime() {
    const currentTime = new Date();

    return (
        <div>
            <h2 className='Data-time'>
                Текущее время: {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </h2>
            <h2>Дата: {currentTime.toLocaleDateString('en-GB')}</h2>
        </div>
    );
}

export default CurrentTime;