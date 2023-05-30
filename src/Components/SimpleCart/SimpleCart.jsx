import { useSelector } from "react-redux";
import { useState, useEffect } from 'react'
import { calculateTotal } from './../../store/products/productPrice'
import * as React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import { Box, Button } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import SellIcon from '@mui/icons-material/Sell';

import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'
import './simpleCart.css'


function SimpleCart() {

  const cart = useSelector((currentState) => currentState.productReducer.cart);
  // console.log(cart);
  const [itemCount, setItemCount] = useState(cart.length);
  const [totalCost, setTotalCost] = useState(0)



  useEffect(() => {
    console.log(cart)
    let total = calculateTotal(cart)
    setTotalCost(total)
    setItemCount(cart.length)

  }, [cart])

  const drawerWidth = 300;
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }} width='50px'>
        <IconButton
          open={open}
          color="inherit"
          aria-label="add to cart"
          edge="end"
          onClick={handleDrawerOpen}
          // sx={{ ...(open) }}
        >
          <ShoppingCartIcon />
          <div>{itemCount}</div>
        </IconButton>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <Box className='drawer-header' display='flex' justifyContent='space-between'>
          <Link to='/cart'> 
          <Button width='70%'>View Cart</Button>
            </Link>
          <Button onClick={handleDrawerClose} width='30px'>
            <CloseIcon />
          </Button>
          </Box>

          <Divider />
          <List>
            {cart.map((item, index) => (
              <ListItem key={item.name + index} display='flex' justifyContent='space-between'>
                    <SellIcon />
                  <ListItemText primary={item.name} width='30px' margin='5px'/>
                  <ListItemText primary={item.price} width='30px' margin='5px' alignSelf='flex-end'/>
                <DeleteButton item={item} alignSelf='flex-end'/>
              </ListItem>
            ))}
            <ListItem style={{display:'flex', justifyContent:'flex-end'}}>
              Total: $ {totalCost}
            </ListItem>
          </List>
          <Divider />
        </Drawer>
      </Box>

    </>
  );
}

export default SimpleCart;