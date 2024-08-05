import { useRef, useState } from 'react'


function Exercise_2() {
    const [ counter, setCounter] = useState(0)

    const inputRef = useRef();

    const onInputChange = () => {
        setCounter(inputRef.current.value.length);
    };

    return (
        <>
        <div>
            <h2 style={{ textDecoration: 'underline' }}>Exercise 2. Character counter</h2>
        </div>

        <p>{counter}</p>

        <input type='text' ref={inputRef} placeholder='Type something...' onChange={onInputChange}></input>

        </>
    )
};

export default Exercise_2;