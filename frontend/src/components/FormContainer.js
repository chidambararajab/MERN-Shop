import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <Container style={{ paddingTop: "200px" }}>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f7f7f7",
        }}
      >
        <Col xs={10} md={3}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
