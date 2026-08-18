function App() {
  const API_URL = import.meta.env.VITE_API_URL;

  return (
    <div>
      <h1>API URL</h1>
      <p>{API_URL}</p>
    </div>
  );
}

export default App;