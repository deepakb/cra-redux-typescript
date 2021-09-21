import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container className='justify-content-center'>
          <Nav>
            <Nav.Link href='#home'>
              <h1>My Wallet</h1>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
