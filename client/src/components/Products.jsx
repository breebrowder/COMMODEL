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

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/api/products`)
      .then(res => {
        const products = res.data;
        setProducts(products);
        // this.setState({ products });
        // console.log(products);
      })
  }, [])

  return (
    <Container>
      {products.map((item) => (
        <Product onShowProduct={props.onShowProduct} item={item} key={item._id} />
      ))}
    </Container>
    )
  }


export default Products;