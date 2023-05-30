import { useSelector, useDispatch } from "react-redux";
import * as React from 'react';
import {Button, Container, Typography} from '@mui/material';

import './categories.css'


function Category() {

  let category = useSelector((currentState) => currentState.categoryReducer)
  const dispatch = useDispatch();
  // console.log(category.categoriesList)

  const handleClick = (e) =>{
    // console.log('SELECTED, ', e.target.value)
    dispatch({
      type: 'SELECT_CATEGORY',
      payload: e.target.value
    })
    // console.log(category.activeCategory)
  }


  return(
    <Container id='categories-container'>
    {category.categoriesList.map(item => 
      {return (
        <Typography>
        <Button onClick={handleClick} value={item}>{item}</Button>
        </Typography>
      )}
      )}
      </Container>
  )

}
export default Category;