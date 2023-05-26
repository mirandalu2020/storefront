import Products from './../Products/Products'
import Category from './../Categories/Categories';
import ProductDetails from '../Products/ProductDetails';

function Storefront() {


  return (
      <>
      <Category />
      <Products />
      <ProductDetails />
      </>
  )

}

export default Storefront;