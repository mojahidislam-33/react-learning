import "./App.css";


function App(){

  const name="mojahid";
  const age=24;

  const fruits = ["Apple", "Banana", "Mango"];

  let status;
  if(age>18){
    status="Aduilt";
  }
  else{
    status="Minor";
  }
  
  return(
   <div>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <h2>{status} </h2>

        <ul>
          {fruits.map((fruit)=> (
              <li>{fruit} </li>
          ))}
        </ul>
        
        {age>18? <h2>Aduilt</h2> :<h2>Minor</h2> }

        <div className="greet">
          <h1>Hello Everyone</h1>
        </div>
   </div>
  )
}





export default App;