import { useState } from "react";

function App(){

  const [count,setCount]=useState(0);
  const [isLoggedIn,setLoggedIn]=useState(false);

  return (
    <div>
      <h2>Count {count}</h2>
      <button onClick={()=>setCount(count+5)}>
        Increase
      </button>

      <button onClick={()=>setCount(count-5)}>
        Decrease
      </button>

      <button onClick={()=>setCount(0)}>
        Reset
      </button>
       
       
      <h2>
        {isLoggedIn? "welcome!" : "Please Login"}
      </h2>

      <button onClick={()=>setLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

    </div>
  )
}

export default App;

