import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar className="header" fixed="top" expand="lg">
      <Navbar.Brand style={{ color: "#FFF" }}>React Pokedex</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
