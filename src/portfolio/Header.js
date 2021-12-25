import React from "react";
import styled from "styled-components";
import Typed from "react-typed";
//import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <Container
      style={{
        backgroundImage: `linear-gradient(to top right, #000008, #0008),url(/images/draw.jpg)`,
      }}
    >
      <Section>
        <div className="header">
          <div className="main-info">
            <h1>Welcome on my portfolio</h1>
            <Typed
              className="typed"
              strings={["Web design", "Web Developpement","Management"]}
              typeSpeed={40}
              backSpeed={60}
              style={{ color: "white" }}
              loop
            /> <br/> 
            <br/>
            <button href="#">Contactez moi</button>
          </div>
        </div>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  height: 90vh;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  font-family: "Times New Roman", Times, serif;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  h1 {
    color: white;
    text-transform: uppercase;
  }
  header {
    position: relative;
    background-size: cover;
    background-position: center;
  }
  button {
    color: orange;
    text-decoration: none;
    border-radius: 10px;
    background-color: transparent;
    padding:10px 12px 12px 12px;
    margin:2rem;
  
  }
  .tsparticles-canvas-el{
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 1;
  }
`;


export default Header;
