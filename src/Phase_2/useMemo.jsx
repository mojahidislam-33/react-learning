import { useState,useMemo } from "react";

function UseMemo(){
    const [count,setcount]=useState(0);
    const [number,setNumber]=useState(5);

    const square=useMemo(()=>{
        console.log("calculating..");

        return number * number;
    },[number]);

    return(
        <div>
            <h1>square: {square} </h1>

            <button onClick={()=> setNumber(number+1)}>
                Number Change
            </button>

            <button onClick={()=> setcount(count+1)}>
                Count: {count}
            </button>
        </div>
    )
}

export default UseMemo;