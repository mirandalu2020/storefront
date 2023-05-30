import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import * as React from 'react';
import { getProducts, addToCart } from './../../store/products/populateProducts'
import {Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Container, Grid, Button} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { Link } from "react-router-dom";

import './product.css'


function DisplayProducts() {

  const [displayed, setDisplayed] = useState([]);

  let activeCategory = useSelector((currentState) => currentState.categoryReducer.activeCategory);
  let productDisplayed = useSelector((currentState) => currentState.productReducer);
  const dispatch = useDispatch();

  const handleClick = (e) =>{
    // console.log(e.currentTarget.value)
    let product = JSON.parse(e.currentTarget.value)
    // console.log(product)
    dispatch(addToCart(product))
  }

 useEffect( ()=> {
    dispatch(getProducts())
    // eslint-disable-next-line
  }, []);

  useEffect(()=>{
    let displayedProducts = productDisplayed.products.filter(product => product.category === activeCategory)
    setDisplayed(displayedProducts)
  }, [activeCategory, productDisplayed.products])
  

  return (
    <Container id="product-container" sx={{ flexGrow: 1 }}>
<Grid container
  direction="row"
  justifyContent="space-evenly"
  alignItems="end"
  spacing={1} 
  columns={8}
  // width='300px'
  >
    {displayed.map((item) => 
    {return(
      <>
      <Grid item xs={2} sm={4} md={4} padding='0'>
        <Card key={item._id} className='product-card'>
        <Link to={`/product/${item._id}`}>
          <CardHeader
            action={<IconButton aria-label="settings">
            </IconButton>}
            title={item.name}
            subheader={item.category} />
          <CardMedia
            width='300px'
            component="img"
            height="194"
            image={`https://placehold.co/300x400`}
            alt={item.description} />          <CardContent height='30px' width='300px'>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {`$ ${item.price}`}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {`Count: ${item.inStock}`}
            </Typography>
          </CardContent>
        </Link>

          <Button className='add-to-cart center' aria-label="add to cart" onClick={handleClick} value={JSON.stringify(item)} variant='outlined'>
           <AddShoppingCartRoundedIcon /> Add to Cart </Button>
        </Card>
      </Grid>
      </>
    )
    }
    )}
    </Grid>
    </Container>
  )

  }

export default DisplayProducts;