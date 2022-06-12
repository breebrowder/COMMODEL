import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useState } from 'react';
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  background: #4D55CF;
  background: linear-gradient(to right, #4D55CF 0%, #A3B9FF 26%, #EDE6FF 39%, #FFDEEB 40%, #FFA229 52%, #CF1512 76%, #FFE330 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

  

  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'));
  const handleLogin = (e) => {
    e.preventDefault();
    //set local storage
    localStorage.setItem("isLoggedIn", true);
    // get local storage
    setIsLoggedIn(true);
  };
  const handleLogOut = (e) => {
    e.preventDefault();
    //set local storage false
    localStorage.setItem("isLoggedIn", false);
    setIsLoggedIn(false);
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer> */}
        </Left>
        <Center>
          <Logo>COMMODEL</Logo>
        </Center>
        <Right>
          {!isLoggedIn && <MenuItem onClick={props.onRegister}>REGISTER</MenuItem>}
          {!isLoggedIn && <MenuItem onClick={props.onSignIn} onSubmit={handleLogin}>SIGN IN</MenuItem>}
          {isLoggedIn && <MenuItem >Hello User!</MenuItem>}
          {isLoggedIn && <MenuItem onClick={handleLogOut}>Log out</MenuItem>}
          {/* <MenuItem onClick={props.onCart}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem> */}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;