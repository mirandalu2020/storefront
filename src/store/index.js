import { applyMiddleware, combineReducers, createStore } from 'redux';
import productReducer from './products/product';
import categoryReducer from './categories/cateories';
import thunk from 'redux-thunk'

let reducers = combineReducers ({
  productReducer:productReducer,
  categoryReducer:categoryReducer
})

function store() {
    return createStore(reducers, applyMiddleware(thunk));
}

export default store;