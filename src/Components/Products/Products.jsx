import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import * as React from 'react';
import { getProducts, addToCart } from './../../store/products/populateProducts'
import {Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Container, Grid} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";

import './product.css'


function DisplayProducts() {

  const [displayed, setDisplayed] = useState([]);

  let activeCategory = useSelector((currentState) => currentState.categoryReducer.activeCategory);
  let productDisplayed = useSelector((currentState) => currentState.productReducer);
  const dispatch = useDispatch();
  // console.log('DISPLAYED: ', productDisplayed)

  const handleClick = (e) =>{
    // console.log(e.currentTarget.value)
    let product = JSON.parse(e.currentTarget.value)
    console.log(product)
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
  spacing={{ xs: 1 }} 
  columns={{ xs: 6, sm: 10, md: 12 }}
  >
    {displayed.map((item, idx) => 
    {return(
      <>
      <Grid item xs={4}>
        <Link to={`/product/${item._id}`}>
        <Card key={item._id}>
          <CardHeader
            action={<IconButton aria-label="settings">
            </IconButton>}
            title={item.name}
            subheader={item.category} />
          <CardMedia
            component="img"
            height="194"
            image={`https://picsum.photos/id/${idx * 100}/200/300`}
            alt="Paella dish" />
          <CardContent height='30px'>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {`$ ${item.price}`}
            </Typography>
          </CardContent>
          <IconButton aria-label="add to favorites" onClick={handleClick} value={JSON.stringify(item)}>
            <FavoriteIcon />
          </IconButton>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {`Count: ${item.inStock}`}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            </IconButton>
            <IconButton aria-label="share">

            </IconButton>
          </CardActions>
        </Card>
        </Link>
      </Grid>

      {/* <Routes>
        <Route path="/product/:id" Component={ ProductDetails }/>
      </Routes> */}
      </>
    )
    }
    )}
    </Grid>
    </Container>
  )

  }

export default DisplayProducts;