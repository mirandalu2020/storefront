import { Provider } from 'react-redux';
import createStore from './store';
import Products from './Components/Products/Products'
import Category from './Components/Categories/Categories';
import Header from './Components/Header/Header'

import './App.css';
import SimpleCart from './Components/SimpleCart/SimpleCart';

function App() {
  return (
    <>
    <Header />
    <Provider store={createStore()}>
      <Category />
      <SimpleCart />
      <Products />
    </Provider>
    </>
  );
}

export default App;
