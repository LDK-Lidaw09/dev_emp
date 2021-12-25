import React from "react";
import "./portfolio.css";
import styled from "styled-components";

const Navbar = (props) => {
  return (
    <Container>
      <div>
        <ul className="topnav">
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#news">Work</a>
          </li>
          <li>
            <a href="#contact">Experience</a>
          </li>
          <li className="right">
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.div`
  body {
    margin: 0;
  }

  ul.topnav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #ccc;
    position: sticky;
    z-index: 2;
  }

  ul.topnav li {
    float: left;
  }

  ul.topnav li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  ul.topnav li a:hover:not(.active) {
    background-color: #111;
  }

  ul.topnav li a.active {
    background-color: #04aa6d;
  }

  ul.topnav li.right {
    float: right;
  }
  

  @media screen and (max-width: 600px) {
    ul.topnav li.right,
    ul.topnav li {
      float: none;
    }
  }
`;

export default Navbar;
