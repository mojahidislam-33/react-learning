import { lazy,Suspense,useState } from "react";

const Home=lazy(()=> import ("./Home"));
const Dashboard=lazy(()=> import("./Dashboard"));

function CodeSplitting(){

    const [page,setPage]=useState("Home");

    return(
        <div>
            <h1>Code Splitting Example</h1>

            <button onClick={()=> setPage("Home")}>
                Home
            </button>

            <button onClick={()=> setPage("Dashboard")}>
                Dashboard
            </button>

            <Suspense fallback={ <p>Page Loading..</p> }>

                 {page === "Home" && <Home />}

                 {page==="Dashboard" && <Dashboard />}

            </Suspense>
        </div>
    )

}


export default CodeSplitting;