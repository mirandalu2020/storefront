const products = require('./products.json')
const { fillProducts } = require('./populateProducts')

const initialState = {
  products: [],
  displayedProducts: [],
  cart: [],
}


function productReducer(state = initialState, action) {
  // console.log('STATE, ', state);
  // console.log('ACTION', action)
  switch (action.type) {

    case 'FETCH_PRODUCTS':
      const productArr = [];
      // console.log('PRODUCTS FROM API ', action.payload)
      for (let item of action.payload.results) {
        fillProducts(productArr, item._id, item.category, item.name, `${item.name} in the ${item.category} department`, item.price, item.inStock)
      }
      console.log('PRODUCTS IN STATE WITH GET, ', productArr)
      return {
        ...state,
        products: productArr
      }

    case "SELECT_CATEGORY":
      let displayedProducts = state.products.filter(product => product.category === action.payload)
      return {
        ...state,
        displayedProducts: displayedProducts
      }

    case "ADD_TO_CART":
      // console.log('ADD TO CART', action.payload)
      // console.log(state)
      const productInventoryChange = state.products.map(item => {
        if (item._id === action.payload._id) {
          item.inStock = action.payload.inStock;
        }
        return item;
      })
      return {
        ...state,
        displayedProducts: [action.payload],
        products: productInventoryChange,
        cart: [...state.cart, action.payload]
      }

    case "DELETE_ITEM":
      console.log('DELETED', action.payload)
      console.log(state)
      const productRestock = state.products.map(item => {
        if (item._id === action.payload._id) {
          item.inStock = action.payload.inStock;
        }
        return item;
      })
      const payloadArr = state.cart.map(item => item._id)
      let deletedItemIndex = payloadArr.indexOf(action.payload._id);
      console.log(deletedItemIndex)
      let deletedItem = state.cart.toSpliced(deletedItemIndex, 1);

      return {
        ...state,
        cart: deletedItem,
        product: productRestock
      }

    default:
      return state
  }
}

export default productReducer
