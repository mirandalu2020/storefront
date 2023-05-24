import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

function DeleteButton({item}) {

  const dispatch = useDispatch();

  const handleDelete = (e) => {
    let parsedItem = JSON.parse(e.target.value)
    console.log(parsedItem);
    dispatch({
      type:'DELETE_ITEM',
      payload: parsedItem
    })
    console.log(parsedItem)
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