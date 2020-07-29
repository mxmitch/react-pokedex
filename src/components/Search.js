import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Search = (props) => {
  const [value, setValue] = useState("");

  const onSearch = (event) => {
    event.preventDefault();
    props.handleSubmit(value);
  };

  return (
    <Form inline onSubmit={onSearch}>
      <FormControl
        type="text"
        placeholder="Search"
        style={{ width: "90%", marginRight: "8px" }}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button variant="outline-success" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default Search;
