import "../styles/search.css"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import React, { useState } from "react";

export default function Search ({ getSearchValue }) {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSearch = () => {
    getSearchValue(inputValue)
  }

  return (
    <div className="hero">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <h1 className="">Find your next favourite movie</h1>
            <Form className="mt-4">
              <Form.Group controlId="searchForm">
                <Form.Control type="search" placeholder="Search for movies" value={inputValue} onChange={handleInputChange} required/>
              </Form.Group>
              <Button variant="primary" className="button" onClick={handleSearch}>
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

