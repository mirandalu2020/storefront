import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../../store/products/populateProducts';
import Button from '@mui/material/Button';
import './deleteButton.css'

function DeleteButton({item}) {

  const dispatch = useDispatch();

  const handleDelete = (e) => {
    console.log(e)
    let parsedItem = JSON.parse(e.target.value)
    console.log(parsedItem);

    dispatch(deleteFromCart(parsedItem))
  }

  return(
    <>
      <Button variant="outlined" color="error" value={JSON.stringify(item)} onClick={handleDelete} id='delete-cart'>
        Delete
      </Button>
      </>
  )


}

export default DeleteButton;