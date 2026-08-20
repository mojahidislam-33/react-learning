import { useState,useTransition } from "react";

function UseTransition(){
    const [tab,setTab]=useState("Home");

    const [isPending,startTransition]=useTransition();

    function handleTabChange(newTab){
        startTransition(()=>{
            setTab(newTab);
        });
    }

    return (
    <div>
      <h2>useTransition Example</h2>

      <button onClick={() => handleTabChange("Home")}>
        Home
      </button>

      <button onClick={() => handleTabChange("Products")}>
        Products
      </button>

      <button onClick={() => handleTabChange("About")}>
        About
      </button>

      {isPending && <p>Loading...</p>}

      <h3>Current Tab: {tab}</h3>

      {tab === "Home" && <p>Welcome to Home</p>}

      {tab === "Products" && <p>Here are our Products</p>}

      {tab === "About" && <p>About our website</p>}
    </div>
  );


}

export default UseTransition;