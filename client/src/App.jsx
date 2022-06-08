import { useState } from 'react';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

const App = () => {
  const [showHome, setShowHome] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  const signInHandler = () => {
    setShowLogin(true);
    setShowHome(false);
  };
  const registerHandler = () => {
    setShowRegister(true);
    setShowHome(false);
  };
  const cartHandler = () => {
    setShowCart(true);
    setShowHome(false);
  };
  const productHandler = () => {
    setShowProduct(true);
    setShowHome(false);
  };
  const returningHomeHandler = () => {
    setShowHome(true);
    setShowLogin(false);
    setShowRegister(false);
    setShowCart(false);
  };

  return (
    <>
      {showHome && (
        <Home
          onSignIn={() => {
            signInHandler();
          }}
          onRegister={() => {
            registerHandler();
          }}
          onCart={() => {
            cartHandler();
          }}
          onShowProduct={() => {productHandler()}}
        />
      )}
      {showLogin && <Login />}
      {showRegister && <Register />}
      {showProduct && <Product />}
      {showCart && (
        <Cart
          onReturningHome={() => {
            returningHomeHandler();
          }}
        />
      )}
    </>
  );
  // return <Home />;
  // return <Login />;
  // return <Product />;
  // return <ProductList />;
};

export default App;
