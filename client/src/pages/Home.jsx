import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = (props) => {
  return (
    <div>
      <Announcement />
      <Navbar onSignIn={props.onSignIn} onRegister={props.onRegister} onCart={props.onCart}/>
      <Slider />
      <Categories />
      <Products onShowProduct={props.onShowProduct}/>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
