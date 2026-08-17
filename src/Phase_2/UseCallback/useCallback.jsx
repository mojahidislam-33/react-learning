import { useCallback, useState } from "react";
import Child from "./Child";

function UseCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Hello");
  }, []);

  

  return (
    <div>
      <h1>Count: {count}</h1>
      

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}

export default UseCallback;