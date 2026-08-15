import { useEffect, useState } from "react";

function ApiFetching() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error , setError]=useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if(!response.ok){
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading (false);
      })
      .catch(()=>{
        setError("went something wrong!");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      
      {loading ? (
        <p>Loading ...!</p>
      ) : error ?(
          <p>{error} </p>
      ) : (
        users.map((user) => (
        <p key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </p>
      ))
      )}
      
    </div>
  );
}

export default ApiFetching;