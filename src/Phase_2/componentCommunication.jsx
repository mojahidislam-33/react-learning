function Child({ onMessage }) {
  return (
    <button onClick={() => onMessage("Hello from Child!")}>
      Send Message
    </button>
  );
}

function ComponentCommunication() {
  function handleMessage(message) {
    console.log(message);
  }

  return (
    <div>
      <h1>Parent Component</h1>

      <Child onMessage={handleMessage} />
    </div>
  );
}

export default ComponentCommunication;