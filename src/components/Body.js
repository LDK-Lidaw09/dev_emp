import React from "react";
import styled from "styled-components";
import Leftside from "../components/LeftSide";
import Main from "./Main";
import Rightside from "./RightSide";
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const Body = (props) => {
  return (
    <Container style ={{backgroundImage: `url(/images/wave.png)`}}>
       {!props.user && <Redirect to ="/" />} 
      <Section>

        <h5>
         Vous êtes à la recherche d'emplois et d'opportunités de carrière? Vous êtes au bon endroit.
        </h5> 
        <p>
          Découvrez les différentes fonctionnalités et opportunités offertes sur cette plateforme. Bonne expérience!!
        </p>
      </Section>
      <Layout>
      <Leftside />
      <Rightside />
      <Main />
      </Layout> 
    </Container>
  );
};

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

const Section = styled.section`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: none;
  font-style: inherit;
  display: flex;
  justify-content: center;
  h5 {
    padding-top: 3%;
    color: #0a66c2;
    font-size: 14px;
    font-weight: 700;
  
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
    padding-top: 2.84%;

  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-row: auto; */
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const mapStateToProps = (state) => {

  return{
    user: state.userState.user  };
};

export default connect(mapStateToProps)(Body);
//export default Body;