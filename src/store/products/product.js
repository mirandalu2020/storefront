const products = require('./products.json')

const initialState = {
  products: products,
  displayedProducts: [],
  cart:[],
}
console.log(products)

function productReducer(state=initialState, action){
  // console.log('STATE, ', state);
  // console.log('ACTION', action)
  switch(action.type) {
    case "SELECT_CATEGORY":
      let displayedProducts = state.products.filter(product => product.category === action.payload)
    return {
      ...state,
      displayedProducts: displayedProducts
    }

    case "ADD_TO_CART":
      console.log(products)
      const updatedProducts = products.map(item => {
          if (item.name===action.payload.name && item.category === action.payload.category) {
           item.inventoryCount -= 1;
        }
        // console.log('UPDATED', item)
        return item
      })
      // console.log('UPDATED', updatedProducts)
      return {
        ...state,
        product: [...state.products, updatedProducts],
        cart: [...state.cart, action.payload]
      }

      case "DELETE_ITEM":
        console.log('DELETE ACTION', action.payload)
        let deletedItem = state.cart.filter(product => product === action.payload);
        // console.log(action.payload)
        console.log('CART AFTER DELETION', deletedItem)
        return {
          ...state,
          cart: deletedItem
        }

    default:
      return state
  }
}

export default productReducer
