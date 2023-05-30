import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from './../../store/products/productPrice.js'
import DeleteButton from './../SimpleCart/DeleteButton'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, List, ListItem, Grid, ListItemText, Typography, IconButton, Paper, ListItemAvatar, Avatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';


function ShoppingCart() {

  const [totalCost, setTotalCost] = useState(0);

  const cart = useSelector((currentState) => currentState.productReducer.cart);

  useEffect(()=>{
    let total = calculateTotal(cart)
    setTotalCost(total)
  },[cart, totalCost])

  let displayCart = cart && cart.map(item => {
    return (
      <TableRow
        key={item._id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {item.name}
        </TableCell>
        <TableCell align="right">$ {item.price}</TableCell>
        <DeleteButton item={item} />
      </TableRow>
    )
  })

  return (
    <>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
        Your Cart
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Your Items</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayCart}
            <TableRow>
            <TableCell colSpan={1}>Total</TableCell>
            <TableCell align="right">$ {totalCost}</TableCell>
          </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>

  )
}

export default ShoppingCart;