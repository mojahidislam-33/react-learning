import { useEffect, useRef, useState } from "react";

function UseRefWithPreviousCount() {
  const [count, setCount] = useState(0);

  const previousCount = useRef(0);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <div>
      <h1>Current: {count}</h1>

      <h2>Previous: {previousCount.current}</h2>

      <button onClick={()=>setCount(count+1)}>
        Increase
      </button>
    </div>
  );
}

export default UseRefWithPreviousCount;