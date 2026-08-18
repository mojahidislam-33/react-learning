import { useContext } from "react";
import { CartContext } from "./CartContext";

function Product() {
  const { dispatch } = useContext(CartContext);

  const product = {
    id: 1,
    title: "iPhone",
    price: 80000,
  };

  function addToCart() {
    dispatch({
      type: "ADD",
      product: product,
    });
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <p>Price: ৳{product.price}</p>

      <button onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;