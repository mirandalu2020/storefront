import { Button } from '@mui/material'
import { useDispatch  } from 'react-redux'
import  AddShoppingCartRoundedIcon  from '@mui/icons-material/AddShoppingCartRounded';
import { addToCart } from './../../store/products/populateProducts'

function BuyButton({ item }) {

  const dispatch = useDispatch();

  const handleClick = (e) =>{
    // console.log(e.currentTarget.value)
    let product = JSON.parse(e.currentTarget.value)
    // console.log(product)
    dispatch(addToCart(product))
  }
  
  return(
    <Button className='add-to-cart center' aria-label="add to cart" onClick={handleClick} value={JSON.stringify(item)} variant='outlined'> <AddShoppingCartRoundedIcon /> Add to Cart 
    </Button>
  )
}

export default BuyButton;