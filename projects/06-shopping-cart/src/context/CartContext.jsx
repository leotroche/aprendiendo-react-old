import { createContext, useReducer } from 'react'

import { CART_ACTIONS, CART_INITIAL_STATE, CART_REDUCER } from '../reducers/CartReducer'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(CART_REDUCER, CART_INITIAL_STATE)

  const addToCart = (product) => {
    dispatch({ type: CART_ACTIONS.ADD_TO_CART, payload: product })
  }

  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART })
  }

  const removeFromCart = (product) => {
    dispatch({ type: CART_ACTIONS.REMOVE_FROM_CART, payload: product })
  }

  return (
    <CartContext.Provider value={{ cart: state, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
