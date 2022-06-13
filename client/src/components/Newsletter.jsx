// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 60vh;
  background-color: #ffc87c;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  color: white;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 19%;
  height: 33px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  width: 68%;
  height: 33px;
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  width: 20%;
  height: 34px;
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  const [state, handleSubmit] = useForm("xlezvaeg");
  if (state.succeeded) {
      return <h2>Thanks for joining!</h2>;
  }
  return (
    <Container>
      <Title>Subscribe</Title>
      <Desc>Get timely updates about new product launches.</Desc>
      
      <form onSubmit={handleSubmit}>
      <Input placeholder="Your email"
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <Button type="submit" disabled={state.submitting}>
      Send
      </Button>
      </form>
    
    </Container>
  );
};

export default Newsletter;
