import React from "react";
import "./style.css";
import NavbarLink from "../NavbarLink";

function Navbar() {
  return (
    <nav className="topnav">
      <NavbarLink label="Home" path="/" />
      <NavbarLink label="Upload Listing" path="/upload" />
      <NavbarLink label="Login" path="/login" />
      <NavbarLink label="Register" path="/register" />
      <NavbarLink label="Messages" path="/messages" />
      <NavbarLink label="Product List" path="/productlist" />
    </nav>
  );
}

export default Navbar;
