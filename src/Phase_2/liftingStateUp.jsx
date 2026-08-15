import { useState } from "react";

function Input({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Type something..."
    />
  );
}

function Display({ value }) {
  return <h2>You typed: {value}</h2>;
}

function LiftingState() {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Lifting State Up</h1>

      <Input
        value={text}
        onChange={setText}
      />

      <Display value={text} />
    </div>
  );
}

export default LiftingState;