import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const Search = (props) => {
  const [value, setValue] = useState("");

  const onSearch = (event) => {
    event.preventDefault();
    props.handleSubmit(value);
  };

  return (
    <Row style={{ justifyContent: "center" }}>
      <Form inline onSubmit={onSearch} className="margin-bottom">
        <FormControl
          type="text"
          placeholder="Search"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          style={{
            display: "inline",
            marginBottom: "16px",
            marginRight: "16px"
          }}
        />
        <Button
          variant="outline-success"
          type="submit"
          className="margin-bottom"
        >
          Search
        </Button>
      </Form>
    </Row>
  );
};

export default Search;
