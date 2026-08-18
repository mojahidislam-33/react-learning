import { useReducer } from "react";

function reducer(state,action){
    switch(action.type){
        case "Increase":
            return {count: state.count +1};
        
        case "Decrease":
            return {count: state.count - 1};

        default:
            return state;
    }
}

function Counter(){
    const [state,dispatch]=useReducer(reducer,{count:0} );

    return(
        <div>
            <h2>{state.count} </h2>
             <button onClick={()=>dispatch({type: "Increase" })}>
               +
             </button>

            <button onClick={()=>dispatch({type : "Decrease"})}>
               -
            </button>
    </div>
    );
}

export default Counter;