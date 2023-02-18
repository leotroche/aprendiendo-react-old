import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import './Cart.css'
import { useCart } from '../hooks/useCart'
import { CartItem } from './CartItem'

export function Cart() {
  const checkboxId = useId()
  const { cart, clearCart, addToCart, removeFromCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={checkboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={checkboxId} hidden />

      <aside className='cart'>
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              {...product}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
