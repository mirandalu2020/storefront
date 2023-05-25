import createStore from './index';
import { productReducer } from './products/product'
import { categoryReducer } from './categories/cateories'
import { combineReducers } from 'redux';

describe('Testing create store,', ()=>{

  let reducers = combineReducers ({
    productReducer:productReducer,
    categoryReducer:categoryReducer
  })
  const store = createStore(reducers);
  // const state = store.getState();

  test('can select product category', ()=>{
    store.dispatch({
      type: 'SELECT_CATEGORY',
      payload: 'electronics'
    })
    const state = store.getState();
    let categorySet = new Set();
    state.productReducer.displayedProducts.map(item => categorySet.add(item.category))
    console.log(categorySet.size);

    expect(state.categoryReducer.activeCategory).toEqual('electronics');
    expect(categorySet.keys().next().value).toEqual('electronics');
    expect(categorySet.size).toEqual(1);
  })
})