import { useEffect, useState } from "react";

function ApiFetching() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading (false);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      
      {loading ? (
        <p>Loading ...!</p>
      ) : (
        users.map((user) => (
        <p key={user.id}>
          {user.name}
        </p>
      ))
      )}
      
    </div>
  );
}

export default ApiFetching;