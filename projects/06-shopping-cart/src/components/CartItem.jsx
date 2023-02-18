export function CartItem({ thumbnail, title, price, quantity, addToCart, removeFromCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - $ {price}
      </div>

      <footer>
        <button onClick={removeFromCart}>-</button>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}
