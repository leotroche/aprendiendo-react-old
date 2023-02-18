import { IS_DEVELOPMENT } from '../config'
import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'
import './Footer.css'

export function Footer() {
  const { filters } = useFilters()
  const { cart } = useCart()

  return (
    <footer className='footer'>
      {IS_DEVELOPMENT && <div>Filters: {JSON.stringify(filters, null, 2)}</div>}
      {IS_DEVELOPMENT && <div>Cart: {JSON.stringify(cart, null, 2)}</div>}

      <h4>
        Prueba técnica de React ⚛️ － <span>@midudev</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  )
}
