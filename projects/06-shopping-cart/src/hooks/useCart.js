import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export function useCart() {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  const { cart, addToCart, clearCart, removeFromCart } = context

  return { cart, addToCart, clearCart, removeFromCart }
}
