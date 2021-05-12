const initialState = {
  menu: [],
  loading: true,
  error: false,
  items: [],
  totalPrice: 0
}

const reducer = (state = initialState, action) => {
  
  switch(action.type) {
    case 'MENU_LOADED':
      return {
        ...state,
        menu: action.payloaded,
        loading: false,
      }
    case 'MENU_REQUESTED':
      return {
        ...state,
      }
    case 'MENU_ERROR':
      return {
        ...state,
        error: true
      }


    case 'MENU_ADD_CART':
      const id = action.cart
      const itemInd = state.items.findIndex(item => item.id === id)
      if(itemInd >= 0) {
        const totalItem = state.items.find(item => item.id === id)
        const newItem = {
          ...totalItem,
          quantity: ++totalItem.quantity
        }
        return {
          ...state,
          items: [
            ...state.items.slice(0, itemInd), 
            newItem,
            ...state.items.slice(itemInd + 1)
          ],
          totalPrice: state.totalPrice + newItem.price
        }
      }

      const item = state.menu.find(item => item.id === id)
      const newItem = {
        title: item.title,
        price: item.price,
        url: item.url,
        id: item.id,
        quantity: 1
      }
      return {
        ...state,
        items: [
          ...state.items,
          newItem
        ],
        totalPrice: state.totalPrice + newItem.price
      }


    case 'MENU_DELETE_CART':
      const index = action.cart
      const itemIndex = state.items.findIndex(item => item.id === index)
      const price = state.items[itemIndex]['price'] * state.items[itemIndex]['quantity']
      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1)
        ],
        totalPrice: state.totalPrice - price
      }
      

    default:
      return state
  }
}

export default reducer