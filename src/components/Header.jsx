import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {
  //to access the state value
  const wishlist=useSelector((state)=>state.wishlistReducer)
  //console.log(wishlist);
  const cart=useSelector((state)=>state.cartReducer)

  return (
    <Navbar expand="lg" className="bg-primary fixed-top">
    <Container>
      <Navbar.Brand href="#home"><Link style={{textDecoration:'none',color:'white'}} to={'/'}>E-CART</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='btn border border-secondary rounded ms-3 mt-2' href="#home"><Link style={{textDecoration:'none',color:'white'}} to={'/wishlist'}><i class="fa-solid fa-heart text-danger"></i> Wishlist <Badge bg="secondary" className='rounded ms-2'>{wishlist.length}</Badge></Link> </Nav.Link>
          <Nav.Link className='btn border border-secondary rounded ms-3' href="#link"><Link style={{textDecoration:'none',color:'white'}} to={'/cart'}><i class="fa-solid fa-cart-shopping text-warning"></i> Cart <Badge bg="secondary" className='rounded ms-2'>{cart.length}</Badge></Link> </Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header