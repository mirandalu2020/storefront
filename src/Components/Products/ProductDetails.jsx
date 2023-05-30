import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts, addToCart } from './../../store/products/populateProducts'

import BuyButton from "./BuyButton";

import { Container, Button, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './productDetails.css'

function ProductDetails() {

  let { id } = useParams();
  let [currentProduct, setCurrentProduct] = useState({});
  const dispatch = useDispatch();

  let products = useSelector((currentState) => currentState.productReducer.products);
  console.log(products)

  useEffect( ()=> {
    console.log('DISPATCH GET PRODUCTS')
    dispatch(getProducts())
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(products)
    let result = products.filter(item => item._id === id);
    console.log('CURRENT PRODUCT', result)
    setCurrentProduct(result[0]);
  }, [id, products])

  return (
    <Container>
      <Container className='product-detail'>
        <Typography>
      <h2 width='100%'>{currentProduct.name} </h2>
      <figure>
      <img className='product-image' src='https://placehold.jp/3d4070/ffffff/500x500.png' alt={`iamge of ${currentProduct.name}`} width='fit-content'/>
      </figure>
      <div className="product-attributes">
        <div>In Stock: {currentProduct.inStock}</div>
        <div>$ {currentProduct.price}</div>
        <BuyButton item={currentProduct}/>
      </div>
      </Typography>
      </Container>

      <Container id="related-products">
      <Typography>
        <h4>RELATED ITEMS</h4>
        {(products.slice(0, 3)).map(item=> {
          return(
            <div>{item.name}</div>
          )
        })}
        </Typography>
      </Container>

      <Container id="product-details">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Specifications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>User Reviews</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Container>
    </Container>
  )

}

export default ProductDetails;