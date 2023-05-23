const products = require('./products.json')

const initialState = {
  products: products,
  displayedProducts: []
}
console.log(products)

function productReducer(state=initialState, action){
  console.log('STATE, ', state);
  console.log('ACTION', action)
  switch(action.type) {
    case "SELECT_CATEGORY":
      let displayedProducts = state.products.filter(product => product.category === action.payload)
    return {
      ...state,
      displayedProducts: displayedProducts
    }
    default:
      return state
  }
}

export default productReducer
