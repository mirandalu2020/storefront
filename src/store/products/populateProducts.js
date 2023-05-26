export function fillProducts(productArr, id, category, name, description, price, inStock) {
  const product = {
    _id: id,
    category: category,
    name: name,
    description: description,
    price: price,
    inStock: inStock,
  }
  productArr.push(product)
  // console.log(initialState.products)
}

const updateProducts = async (baseUrl, id, data) => {
  let updateQuantity = await fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  let updatedProduct = await updateQuantity.json();
  console.log('UPDATED', updatedProduct)
  return updatedProduct;
}

export const getProducts = () => async(dispatch) => {
  let requestProducts = await fetch(`https://api-js401.herokuapp.com/api/v1/products`, {
  method: 'GET',
});
  const productsReceived = await requestProducts.json();
  // console.log('GET PRODUCT', productsReceived)

  return dispatch({
    type: 'FETCH_PRODUCTS',
    payload: productsReceived
  })
}

export const addToCart = (product) => async(dispatch) => {
    
    const addToCartData = {
      inStock: product.inStock-1
    }

    const updatedProduct = await updateProducts('https://api-js401.herokuapp.com/api/v1/products', product._id, addToCartData)

  dispatch({
    type: 'ADD_TO_CART',
    payload: updatedProduct
  })
}

export const deleteFromCart = (product) => async(dispatch) => {

  const restockData = {
    inStock: product.inStock+1
  }

  const updatedProduct = await updateProducts('https://api-js401.herokuapp.com/api/v1/products', product._id, restockData);

  dispatch({
    type: 'DELETE_ITEM',
    payload: updatedProduct
  })
}
