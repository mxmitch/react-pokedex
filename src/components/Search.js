import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Search = (props) => {
  const [value, setValue] = useState("");

  return (
    <Form inline onSubmit={props.handleSubmit(value)}>
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
