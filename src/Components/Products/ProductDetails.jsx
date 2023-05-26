import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Button, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ProductDetails() {

  let { id } = useParams();
  let [currentProduct, setCurrentProduct] = useState({})
  let products = useSelector((currentState) => currentState.productReducer.products);
  let activeCategory = useSelector((currentState) => currentState.categoryReducer.activeCategory);

  const dispatch = useDispatch();

  useEffect(() => {
    let result = products.filter(item => item._id === id);
    setCurrentProduct(result);
  }, [id, products])

  return (
    <Container>
      <div> {id} </div>
      <h3>{currentProduct.name} </h3>
      <img src='https://placehold.jp/3d4070/ffffff/150x150.png' alt={`iamge of ${currentProduct.name}`} />
      <div>
        <div>In Stock: {currentProduct.inStock}</div>
        <div>$ {products.price}</div>
        <Button>BUY NOW</Button>
      </div>

      <Container id="related-products">
        <h4>RELATED ITEMS</h4>
        {(products.slice(0, 3)).map(item=> {
          return(
            <div>{item.name}</div>
          )
        })}
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