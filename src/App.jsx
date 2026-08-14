import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      setError("Please fill all fields");
      return;
    }

    setError("");

    console.log(formData);
  }

  return (
    <div>
      <h1>Registration</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />

        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />

        <br />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />

        <br />

        <button type="submit">
          Register
        </button>

      </form>

      {error && <p>{error}</p>}
    </div>
  );
}

export default App;