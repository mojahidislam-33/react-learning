import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom"

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function ReactRouter(){
    return(
        <BrowserRouter>
            
            <nav>
                  <NavLink to="/">Home</NavLink>
                  {" | "}

                  <NavLink to="/about">About</NavLink>
                  {" | "}

                  <NavLink to="/contact">Contact</NavLink>
                  { "|" }

                  <NavLink to="/product">Product</NavLink>
            </nav>


           <Routes>
              <Route path="/" element={<Home />} />  
              <Route path="/About" element={<About />} />    
              <Route path="/Contact" element={<Contact/>}/> 
              <Route path="/Product" element={<Product/>}/>
              <Route path="*" element={<NotFound />} /> 
  
            </Routes>
   
           


        </BrowserRouter>
    )
}

export default ReactRouter;