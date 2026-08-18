import { useEffect, useState } from "react";

function LocalStorage() {
  const [name, setName] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("name");

    if (savedName) {
      setName(savedName);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <div>
      <h1>Hello {name}</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default LocalStorage;