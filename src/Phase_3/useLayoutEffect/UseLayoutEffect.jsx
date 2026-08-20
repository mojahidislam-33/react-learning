import { useLayoutEffect, useRef, useState } from "react";

function UseLayoutEffect() {
  const boxRef = useRef(null);

  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const boxHeight = boxRef.current.getBoundingClientRect().height;

    setHeight(boxHeight);
  }, []);

  return (
    <div>
      <h2>useLayoutEffect Example</h2>

      <div
        ref={boxRef}
        style={{
          width: "300px",
          padding: "20px",
          border: "2px solid black",
        }}
      >
        <p>
          This box is being measured using
          useLayoutEffect.
        </p>
      </div>

      <p>Box Height: {height}px</p>
    </div>
  );
}

export default UseLayoutEffect;