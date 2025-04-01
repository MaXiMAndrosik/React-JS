import { useRef, useState } from "react";

// -----------------------------------------------------------------------
// Seminar Task 2
// Создать компонент TextInput, который содержит текстовое
// поле ввода и отображает введённый текст под ним в реальном
// времени.

function TextInput() {
    let [textInput, setText] = useState();

    const inputRef = useRef(null);

    const textUpdate = () => {
        return setText((textInput = inputRef.current.value));
    };

    return (
        <>
            <input typeof="text" ref={inputRef} onChange={textUpdate} />
            <p className="realTimeText">{textInput}</p>
        </>
    );
}

export default TextInput;
