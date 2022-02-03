import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container>
    <h1>The best place for shopping music.</h1>  
    <Link to="/shop">Visit the shop</Link>      
    </Container>
  )
  }