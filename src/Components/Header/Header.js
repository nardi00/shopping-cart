import React from 'react';
import { Navbar, Title } from './Styles';
import { Link } from 'react-router-dom'

export default function Header() {
  return(
    <Navbar>
      <Title><Link to="/" >Recordrrr</Link></Title>
      <ul>
        <li>
          <Link to="/shop" >Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </Navbar>
  )
}
