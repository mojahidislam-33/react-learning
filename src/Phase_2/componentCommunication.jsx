import { useState } from "react";

function Child({ onMessage }) {
  return (
    <button onClick={() => onMessage("Hello Parent!")}>
      Send Message
    </button>
  );
}

function ComponentCommunication() {
  const [message, setMessage] = useState("");

  function handleMessage(message) {
    setMessage(message);
  }

  return (
    <div>
      <h1>Parent</h1>

      <p>{message}</p>

      <Child onMessage={handleMessage} />
    </div>
  );
}

export default ComponentCommunication;