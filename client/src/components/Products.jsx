import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import { popularProducts } from '../data';
import Product from './Product';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://54.243.27.61:5000/api/products`).then((res) => {
      const products = res.data;
      setProducts(products);
      // this.setState({ products });
      // console.log(products);
    });
  }, []);

  return (
    <Container>
      {products.map((item) => (
        <Product
          onShowProduct1={props.onShowProduct1}
          onShowProduct2={props.onShowProduct2}
          onShowProduct3={props.onShowProduct3}
          onShowProduct4={props.onShowProduct4}
          onShowProduct5={props.onShowProduct5}
          onShowProduct6={props.onShowProduct6}
          item={item}
          key={item._id}
        />
      ))}
    </Container>
  );
};

export default Products;
