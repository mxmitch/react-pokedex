import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Search = (props) => {
  const [value, setValue] = useState("");

  const onSearch = (event) => {
    event.preventDefault();
    props.handleSubmit(value.toLowerCase());
  };

  return (
    <Container>
      <Row>
        <Col lg={12}>
          <Form onSubmit={onSearch}>
            <FormGroup inline>
              <FormLabel>Enter a pokemon or number</FormLabel>

              <FormControl
                type="text"
                placeholder="Search"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                className="margin-bottom"
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
