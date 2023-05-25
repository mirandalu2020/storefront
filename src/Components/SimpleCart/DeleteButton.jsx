import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../../store/products/populateProducts';
import Button from '@mui/material/Button';

function DeleteButton({item}) {

  const dispatch = useDispatch();

  const handleDelete = (e) => {
    let parsedItem = JSON.parse(e.target.value)
    console.log(parsedItem);

    dispatch(deleteFromCart(parsedItem))

    // dispatch({
    //   type:'DELETE_ITEM',
    //   payload: parsedItem
    // })
    // console.log(parsedItem)
  }

  return(
    <>
      <Button variant="outlined" color="error" value={JSON.stringify(item)} onClick={handleDelete}>
        Delete
      </Button>
      </>
  )


}

export default DeleteButton;