import UserContext from "./UserContext";

import Header from "./Header";
import Dashboard from "./Dashboard";

function ContextAPI() {
  const user = {
    name: "Mojahid",
    role: "Frontend Developer",
  };

  return (
    <UserContext.Provider value={user}>
      <Header />
      <Dashboard />
    </UserContext.Provider>
  );
}

export default ContextAPI;