import { useRef } from "react";

function UseRefWithDOM(){
    const inputRef=useRef(null);

    function handleFocus(){
        inputRef.current.focus();

    }

    return (
        <div>
            <h1>Focus Input </h1>
            <input
              ref={inputRef}
              type="text"
              placeholder="enter your name"
            />

            <button onClick={handleFocus}>
                Focus Input
            </button>
        </div>
    )
}

export default UseRefWithDOM;