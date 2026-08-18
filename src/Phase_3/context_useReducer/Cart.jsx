import { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div>
      <h2>My Cart</h2>

      <p>Total Items: {state.cart.length}</p>

      {state.cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {state.cart.map((product) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>Price: ৳{product.price}</p>

              <button
                onClick={() =>
                  dispatch({
                    type: "REMOVE",
                    id: product.id,
                  })
                }
              >
                Remove
              </button>
            </div>
          ))}

          <button
            onClick={() =>
              dispatch({
                type: "CLEAR",
              })
            }
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;