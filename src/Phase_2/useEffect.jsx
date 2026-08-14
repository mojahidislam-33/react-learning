import { useEffect, useState } from "react";

function UseEffect() {
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const timer = setInterval(() => {
      console.log("Timer running...");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  return (
    <div>
      <h1>useEffect Timer</h1>

      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Stop Timer" : "Start Timer"}
      </button>
    </div>
  );
}

export default UseEffect;