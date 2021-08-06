import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <header
      style={{
        zIndex: 1,
        position: 'fixed',
        top: '0',
        width: '100%',
      }}
    >
      <Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>MernShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav style={{ marginLeft: 'auto' }}>
              <Nav.Link href='/cart'>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
              <Nav.Link href='/signin'>
                <i className='fas fa-user'></i> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
