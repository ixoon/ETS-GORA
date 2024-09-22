import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Footer = () => {
  return (
    <footer className="py-3 my-4 border-top">
      <Container>
        <Row>
          <Col>
            <Nav className="justify-content-center mb-3">
              <Nav.Item>
                <Nav.Link href="/" className="px-2 text-body-secondary">Насловна</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/skola" className="px-2 text-body-secondary">Школа</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/organizacija" className="px-2 text-body-secondary">Организација</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/kontakt" className="px-2 text-body-secondary">Контакт</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="text-body-secondary mb-0">Економско-туристичка школа</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
