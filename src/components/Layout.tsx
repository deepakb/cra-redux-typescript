import React from 'react';
import { Container } from 'react-bootstrap';

interface LayoutProps {
  header: JSX.Element
  wallet: JSX.Element
}

const Layout: React.FC<LayoutProps> = ({ header, wallet }): JSX.Element => {
  return (
    <Container>
      {header}
      {wallet}
    </Container>
  )
};

export default Layout;