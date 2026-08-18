import { useReducer } from "react";

const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: [...state.cart, action.product],
      };

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product.id !== action.id
        ),
      };

    case "CLEAR":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
}

function Cart() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  const phone = {
    id: 1,
    title: "Phone",
  };

  const laptop = {
    id: 2,
    title: "Laptop",
  };

  return (
    <div>
      <h2>Cart Items: {state.cart.length}</h2>

      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            product: phone,
          })
        }
      >
        Add Phone
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            product: laptop,
          })
        }
      >
        Add Laptop
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "REMOVE",
            id: 1,
          })
        }
      >
        Remove Phone
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "CLEAR",
          })
        }
      >
        Clear Cart
      </button>

      <ul>
        {state.cart.map((product) => (
          <li key={product.id}>
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;