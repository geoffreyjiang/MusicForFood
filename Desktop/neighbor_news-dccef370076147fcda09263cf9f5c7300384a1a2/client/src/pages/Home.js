import React, { Component } from "react";
import Container from "../components/Container";
import Banner from "../components/Banner";

class Home extends Component {
  render() {
    return (
      <>
        <Banner
          backgroundImage="https://i.pinimg.com/564x/87/f5/0a/87f50a74c7fe20e185045d65492a9052.jpg"
          title="Welcome"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          neque consequuntur"
        ></Banner>
        <Container>
          <h1>This is the Home Page</h1>
        </Container>
      </>
    );
  }
}

export default Home;
