import { useEffect, useState } from "react";

function ApiFetching() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <h2>Name :{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>City :{user.address.city}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ApiFetching;