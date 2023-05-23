import { useSelector } from 'react-redux'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

function DisplayProducts() {

  let productDisplayed = useSelector((currentState) => currentState.productReducer)
  console.log('DISPLAYED: ', productDisplayed)


  return (
    productDisplayed.displayedProducts.map((item, idx) => 
    {return(

      <div key = {idx}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          action={<IconButton aria-label="settings">
            
          </IconButton>}
          title={item.name}
          subheader={item.category} />
        <CardMedia
          component="img"
          height="194"
          image={`https://picsum.photos/id/${idx*10}/200/300`}
          alt="Paella dish" />
        <CardContent>
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
            {`Count: ${item.inventoryCount}`}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          </IconButton>
          <IconButton aria-label="share">
            
          </IconButton>
        </CardActions>
      </Card>
    </div>
    )
    }
  )
  )

  }

export default DisplayProducts;