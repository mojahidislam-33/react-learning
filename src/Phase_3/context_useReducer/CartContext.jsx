import { createContext, useReducer } from "react";

export const CartContext = createContext();

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

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}