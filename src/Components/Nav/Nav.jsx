import Categories from './../Categories/Categories';
import SimpleCart from './../SimpleCart/SimpleCart';
import { Box }  from '@mui/material';

function Nav() {

  return (
    <Box sx={{ display: 'flex' }}>
    <Categories />
    <SimpleCart />
    </Box>
  )
}

export default Nav;