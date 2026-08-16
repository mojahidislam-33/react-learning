import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Product";
import ProductDetails from "./ProductDetails";

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function ReactRouter() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>
        {" | "}

        <NavLink to="/about">About</NavLink>
        {" | "}

        <NavLink to="/contact">Contact</NavLink>
        {" | "}

        <NavLink to="/products">Products</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/products" element={<Products />} />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRouter;