import { useState } from 'react';
import Home from './pages/Home';
import Product from './pages/Product1';
import Product1 from './pages/Product1';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';
import Product4 from './pages/Product4';
import Product5 from './pages/Product5';
import Product6 from './pages/Product6';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Products from './components/Products';

const App = () => {
  const [showHome, setShowHome] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showProduct1, setShowProduct1] = useState(false);
  const [showProduct2, setShowProduct2] = useState(false);
  const [showProduct3, setShowProduct3] = useState(false);
  const [showProduct4, setShowProduct4] = useState(false);
  const [showProduct5, setShowProduct5] = useState(false);
  const [showProduct6, setShowProduct6] = useState(false);
  const [productDetail, setProductDetail] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    //set local storage
    localStorage.setItem("isLoggedIn", true);
    // get local storage
    setIsLoggedIn(true);
    setShowHome(true);
    setShowLogin(false);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
    setShowHome(true);
    setShowRegister(false);
  }

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
  const produc1tHandler = () => {
    setShowProduct1(true);
    setShowHome(false);
  };
  const produc2tHandler = () => {
    setShowProduct2(true);
    setShowHome(false);
  };
  const produc3tHandler = () => {
    setShowProduct3(true);
    setShowHome(false);
  };
  const produc4tHandler = () => {
    setShowProduct4(true);
    setShowHome(false);
  };
  const produc5tHandler = () => {
    setShowProduct5(true);
    setShowHome(false);
  };
  const produc6tHandler = () => {
    setShowProduct6(true);
    setShowHome(false);
  };
  const productDetailHandler = (product) => {
    setProductDetail({...product});
  }

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
          onShowProduct1={() => {produc1tHandler()}}
          onShowProduct2={() => {produc2tHandler()}}
          onShowProduct3={() => {produc3tHandler()}}
          onShowProduct4={() => {produc4tHandler()}}
          onShowProduct5={() => {produc5tHandler()}}
          onShowProduct6={() => {produc6tHandler()}}
          onShowProductDetail={(product) => {productDetailHandler(product)}}
        />
      )}
      {showLogin && <Login onLogIn={handleLogin}/>}
      {showRegister && <Register onRegister={handleRegister}/>}
      {showProduct1 && <Product1 />}
      {showProduct2 && <Product2 />}
      {showProduct3 && <Product3 />}
      {showProduct4 && <Product4 />}
      {showProduct5 && <Product5 />}
      {showProduct6 && <Product6 />}
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
