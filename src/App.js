import { Provider } from 'react-redux';
import createStore from './store';
import Products from './Components/Products/Products'
import Category from './Components/Categories/Categories';
import Header from './Components/Header/Header'

import './App.css';

function App() {
  return (
    <>
    <Header />
    <Provider store={createStore()}>
      <Category />
      <Products />
    </Provider>
    </>
  );
}

export default App;
