import { NavLink, Outlet } from "react-router-dom";

function ProductsLayout() {
  return (
    <div>
      <h1>Products</h1>

      <nav>
        <NavLink to="/products">
          All Products
        </NavLink>

        {" | "}

        <NavLink to="/products/electronics">
          Electronics
        </NavLink>

        {" | "}

        <NavLink to="/products/clothing">
          Clothing
        </NavLink>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default ProductsLayout;