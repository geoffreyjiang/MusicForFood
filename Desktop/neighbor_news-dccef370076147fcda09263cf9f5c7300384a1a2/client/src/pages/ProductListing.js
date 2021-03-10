import React, { Component } from "react";
import Container from "../components/Container";
import Gallery from "../components/ProductList/gallery";

class ProductListing extends Component {
  render() {
    return (
      <Container>
        <Gallery />
      </Container>
    );
  }
}

export default ProductListing;
