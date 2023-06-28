import "../styles/search.css"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Hero () {
  return (
    <div className="hero">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <h1>Find your next favourite movie</h1>
            <Form className="mt-4">
              <Form.Group controlId="searchForm">
                <Form.Control type="search" placeholder="Search for movies" />
              </Form.Group>
              <Button variant="primary" type="submit" className="button">
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

