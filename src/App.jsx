import { useState } from "react";
function App() {
  
  function handleClick(event){
     console.log("Button Click")
  }

  function handleChange(event){
    console.log(event.target.value)

  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Submited");
  }

  return (
    <div>
      <button onClick={handleClick}>
        Clicked Me
      </button>

      <input type="text" onChange={handleChange} />

      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>

    
  );
}

export default App;