// import { useState } from 'react'

// export function useLocalStorage(key, initialValue) {
//   const [item, setItem] = useState(() => {
//     try {
//       const itemFromStorage = window.localStorage.getItem(key)
//       return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
//     } catch (error) {
//       return initialValue
//     }
//   })

//   const saveItem = () => {
//     try {
//       const newValue = window.localStorage.setItem(key, JSON.stringify(initialValue))
//       setItem(newValue)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return [item, saveItem]
// }

import { useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue]
}
