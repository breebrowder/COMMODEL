import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Title = styled.h1`
  font-weight: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const Home = (props) => {
  return (
    <div>
      <Announcement />
      <Navbar
        onSignIn={props.onSignIn}
        onRegister={props.onRegister}
        onCart={props.onCart}
      />
      <Slider />
      &nbsp; &nbsp;
      <Title><h2><b>Product List</b></h2></Title>
      {/* <Categories /> */}
      <Products
        onShowProduct1={props.onShowProduct1}
        onShowProduct2={props.onShowProduct2}
        onShowProduct3={props.onShowProduct3}
        onShowProduct4={props.onShowProduct4}
        onShowProduct5={props.onShowProduct5}
        onShowProduct6={props.onShowProduct6}
        onShowProductDetail={props.onSHowProductDetail}
      />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
