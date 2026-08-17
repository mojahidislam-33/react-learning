import { useRef, useState } from "react";

function UseRefWithTimer() {
  const [count, setCount] = useState(0);

  const timerRef = useRef(null);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
  }

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={startTimer}>
        Start
      </button>

      <button onClick={stopTimer}>
        Stop
      </button>
    </div>
  );
}

export default UseRefWithTimer;