import { useRef } from "react";

function UseRef(){
    const countRef=useRef(0);

    function handleClick(){
        countRef.current=countRef.current+1;
        console.log(countRef.current);
        
    }

    return (
        <div>
            <h1>UseRef Example</h1>

            <button onClick={handleClick}>
                Increase

            </button>
        </div>
    )


}
export default UseRef;