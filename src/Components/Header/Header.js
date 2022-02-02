import React from 'react';
import { Navbar } from './Styles';
import { Link } from 'react-router-dom'

export default function Header() {
  return(
    <Navbar>
      <div>Header</div>
      <ul>
        <li>
          <Link to="/products" >Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </Navbar>
  )
}
