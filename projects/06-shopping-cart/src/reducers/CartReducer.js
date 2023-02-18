// export const CART_REDUCER = {
//   [CART_ACTIONS.ADD_TO_CART]: (state, action) => {
//     const productInCartIndex = state.findIndex((item) => item.id === action.payload.id)

//     if (productInCartIndex >= 0) {
//       const newCart = structuredClone(state)
//       newCart[productInCartIndex].quantity += 1
//       console.log(newCart)
//       return newCart
//     }
//     console.log({ ...action.payload, quantity: 1 })

//     return [...state, { ...action.payload, quantity: 1 }]
//   },

//   [CART_ACTIONS.CLEAR_CART]: () => {
//     return CART_INITIAL_STATE
//   },

//   [CART_ACTIONS.REMOVE_FROM_CART]: (state, action) => {
//     const productInCartIndex = state.findIndex((item) => item.id === action.payload.id)

//     if (productInCartIndex >= 0 && action.payload.quantity > 1) {
//       const newCart = structuredClone(state)
//       newCart[productInCartIndex].quantity -= 1
//       return newCart
//     }

//     const newCart = state.filter((item) => item.id !== action.payload.id)
//     return newCart
//   },
// }

export const CART_INITIAL_STATE = JSON.parse(window.localStorage.getItem('cart')) || []

const updateStorage = (item) => {
  window.localStorage.setItem('cart', JSON.stringify(item))
}

export const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  CLEAR_CART: 'CLEAR_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
}

export const CART_REDUCER = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const productInCartIndex = state.findIndex((item) => item.id === action.payload.id)

      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state)
        newCart[productInCartIndex].quantity += 1

        updateStorage(newCart)
        return newCart
      }

      const newCart = [...state, { ...action.payload, quantity: 1 }]
      updateStorage(newCart)
      return newCart
    }

    case CART_ACTIONS.CLEAR_CART: {
      updateStorage([])
      return CART_INITIAL_STATE
    }

    case CART_ACTIONS.REMOVE_FROM_CART: {
      const productInCartIndex = state.findIndex((item) => item.id === action.payload.id)

      if (productInCartIndex >= 0 && action.payload.quantity > 1) {
        const newCart = structuredClone(state)
        newCart[productInCartIndex].quantity -= 1

        updateStorage(newCart)
        return newCart
      }

      const newCart = state.filter((item) => item.id !== action.payload.id)
      updateStorage(newCart)
      return newCart
    }

    default: {
      updateStorage(state)
      return state
    }
  }
}
