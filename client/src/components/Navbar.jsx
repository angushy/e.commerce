import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
`;

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
        </Left>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <Center>
            <Logo>A & G</Logo>
          </Center>
        </Link>
        <Right>
          <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;