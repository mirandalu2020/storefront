// const products = [];

// function fillProducts(category, name, description, price, inventoryCount) {
//   const product = {
//     category: category,
//     name: name,
//     description: description,
//     price: price,
//     inventoryCount: inventoryCount,
//   }
//   products.push(product)
//   // console.log(initialState.products)
// }

// async function getData() {
//   let apiRequest = await fetch('https://api-js401.herokuapp.com/api/v1/products', {
//   method: 'GET',
// });
//   const apiResponse = await apiRequest.json()
//   // console.log(apiResponse);
//   for (let item of apiResponse.results) {
//     fillProducts(item.category, item.name, `${item.name} in the ${item.category} department`, item.price, item.inStock)
//   }
// }

// let initialState = {};

// getData()
// .then(initialState['products'] = products)
// .then(() => console.log(initialState.products))