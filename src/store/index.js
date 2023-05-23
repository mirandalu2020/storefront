import { combineReducers, createStore } from 'redux';
import productReducer from './products/product';
import categoryReducer from './categories/cateories';

let reducers = combineReducers ({
  productReducer:productReducer,
  categoryReducer:categoryReducer
})

function store() {
    return createStore(reducers);
}

export default store;