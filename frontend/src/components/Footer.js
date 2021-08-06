import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#272727',
        height: '100px',
        color: '#f7f7f7',
        justifyContent: 'center',
      }}
    >
      <Row>
        <Col>Copyright &copy; | MERN-Shop</Col>
      </Row>
    </footer>
  );
};

export default Footer;
