import React from 'react';

// Создать компонент Message, отображающий переданный ему props текст.
// Стилизовать компоненты через css (при желании можно использовать less или sass).

function Message({ text }) {
  return <li className="list-group-item list-group-item-secondary">{text}</li>;
}

export default Message;