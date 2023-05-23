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
        const productRestock = products.map(item => {
          if (item.name===action.payload.name && item.category === action.payload.category) {
            item.inventoryCount += 1;
          }
          return item
        })
        const payloadArr = state.cart.map(item => item.name)
        let deletedItemIndex = payloadArr.indexOf(action.payload.name);
        console.log(action.payload, deletedItemIndex)
        let deletedItem = state.cart.toSpliced(deletedItemIndex, 1);

        return {
          ...state,
          cart: deletedItem,
          product: [...state.products, productRestock]
        }

    default:
      return state
  }
}

export default productReducer
