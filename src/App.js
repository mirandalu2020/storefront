import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import createStore from './store';
// import Products from './Components/Products/Products'
// import Category from './Components/Categories/Categories';
import Header from './Components/Header/Header'
import Storefront from './Components/Storefront/Storefront';
import ProductDetails from './Components/Products/ProductDetails';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart.jsx'
import store from './store';
import './App.css';

const theme = createTheme({
  palette: {
    background: {
      default: '#575A5E'
    },
    primary: {
      main: '#575A5E', //davy's gray
    },
    secondary: {
      main: '#A7A2A9', //rose quartz
    },
    info: {
      main: '#222823' //eerie black
    },
    success: {
      main: '#F4F7F5' //seasalt
    }
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontFamily: 'Pangolin',
  },
});

function App() {
  return (
    <>
    {/* <Provider store={createStore(reducers, applyMiddleware(thunk))}> */}
    <Provider store={store()}>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path="/" Component={ Storefront }/>
        <Route exact path="/cart" Component={ ShoppingCart } />
        <Route path="/product/:id" Component={ ProductDetails }/>
      </Routes>
      </BrowserRouter>
      </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
