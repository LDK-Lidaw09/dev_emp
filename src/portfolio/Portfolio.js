import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import styled from "styled-components";

const Portfolio = () => {
  return (
    <Container>
      <Particles
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
    </Container>
  );
};

const Container = styled.div`
 animation: fadeIn 1s;
  .tsparticles-canvas-el {
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 1;
  }
`;
export default Portfolio;
