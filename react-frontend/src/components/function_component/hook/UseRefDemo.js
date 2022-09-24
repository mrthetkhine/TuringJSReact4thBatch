import React, {useRef} from 'react';

export default function UseRefDemo() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };
    return (
        <>
            <input ref={inputEl} type="text" />
            <button
                className={"btn btn-primary"}
                onClick={onButtonClick}>
                Focus the input
            </button>
        </>
    );
}