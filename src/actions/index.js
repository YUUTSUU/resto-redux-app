export const menuLoaded = (res) => {
  return {
    type: 'MENU_LOADED',
    payloaded: res
  }
}

export const menuRequested = () => {
  return {
    type: 'MENU_REQUESTED'
  }
}

export const menuError = () => {
  return {
    type: 'MENU_ERROR'
  }
}

export const menuAddCart = (id) => {
  return {
    type: 'MENU_ADD_CART',
    cart: id
  }
}

export const menuDeleteCart = (id) => {
  return {
    type: 'MENU_DELETE_CART',
    cart: id
  }
}