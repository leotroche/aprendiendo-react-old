import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'
import './Filters.css'

export function Filters() {
  const minPriceId = useId()
  const categoryId = useId()

  const { filters, setFilters } = useFilters()

  const handleChange = (evt) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: evt.target.value,
    }))
  }

  const handleChangeCategory = (evt) => {
    setFilters((prevState) => ({
      ...prevState,
      category: evt.target.value,
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceId}>Price</label>
        <input
          type='range'
          id={minPriceId}
          min='0'
          max='1000'
          onChange={handleChange}
          value={filters.minPrice}
        />
        <span>$ {filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryId}>Category</label>
        <select id={categoryId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smarphones</option>
          <option value='home-decoration'>Home Decoration</option>
        </select>
      </div>
    </section>
  )
}
