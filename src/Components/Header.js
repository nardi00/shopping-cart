import React from 'react';
import { Navbar, Title } from './Styles';
import { Link } from 'react-router-dom'

const Header = ({cartItems}) => {
  return(
    <Navbar>
      <Title><Link to="/" >Recordrrr</Link></Title>
      <ul>
        <li>
          <Link to="/shop" >Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart {cartItems.length === 0 ? "" : "(" + cartItems.length + ")"}</Link>
        </li>
      </ul>
    </Navbar>
  )
}

export default Header