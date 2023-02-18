import { useCart } from '../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import './Products.css'

export function Products({ products }) {
  const { cart, addToCart, removeFromCart } = useCart()

  const checkProductIncart = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {products.map((product) => {
          const isProductInCart = checkProductIncart(product)

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title || product.id} />
              <div>
                <strong>{product.title}</strong>
                <div>$ {product.price}</div>
              </div>
              <div>
                <button
                  onClick={() => (isProductInCart ? removeFromCart(product) : addToCart(product))}
                  className={isProductInCart ? 'btn-cart-red' : 'btn-cart-blue'}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
