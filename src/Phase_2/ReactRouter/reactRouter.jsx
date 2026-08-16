import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import ProductsLayout from "./ProductsLayout";
import AllProducts from "./AllProducts";
import Electronics from "./Electronics";
import Clothing from "./Clothing";

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

      <hr />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* Nested Routes */}

        <Route
          path="/products"
          element={<ProductsLayout />}
        >
          <Route
            index
            element={<AllProducts />}
          />

          <Route
            path="electronics"
            element={<Electronics />}
          />

          <Route
            path="clothing"
            element={<Clothing />}
          />
        </Route>

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default ReactRouter;