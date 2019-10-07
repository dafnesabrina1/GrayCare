import React from "react";
import { Container, Row, Col } from "shards-react";

const DefaultLogIn = ({children}) => (
  <Container fluid>
      <Row>
          <Col 
          className="main-content p-5"
          sm={{ size: 4, order: 4, offset: 4 }}
          >
            {children}
          </Col>
      </Row>
  </Container>
);

export default DefaultLogIn;