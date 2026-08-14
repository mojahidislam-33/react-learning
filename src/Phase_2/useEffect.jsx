import { useState, useEffect} from "react";

function UseEffect(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("component rendered");
       
    });

    useEffect(()=>{
         console.log("Hello from useEffect");
    },[])

    useEffect(() => {
         console.log("Count:", count);
    }, [count]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>
               Increase
            </button>
        </div>
    
    );
}

export default UseEffect;