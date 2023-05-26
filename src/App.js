import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import createStore from './store';
import Products from './Components/Products/Products'
import Category from './Components/Categories/Categories';
import Header from './Components/Header/Header'
import Storefront from './Components/Storefront/Storefront';
import ProductDetails from './Components/Products/ProductDetails';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart'
import store from './store';
import './App.css';
// import SimpleCart from './Components/SimpleCart/SimpleCart';

function App() {
  return (
    <>
    <Header />
    <Provider createStore={store()}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={ Storefront }/>
        <Route exact path="/cart" Component={ ShoppingCart }/>
        <Route path="/product/:id" Component={ ProductDetails }/>
      </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
