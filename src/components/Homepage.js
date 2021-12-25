import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import styled from 'styled-components';
import Header from "../components/Header";
import Body from "../components/Body";
import Login from "../components/Login";
import Job from "../components/Jobs";
import MessagePage from "../components/MessagePage";
import Form from "../components/Form";
import Portfolio from "../portfolio/Portfolio";
import Profil from "./Profil";
//import { connect } from "react-redux";

const App = (props) => {
  return (
    <div className="Homepage">
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/job">
            <Job />
          </Route>
          <Route exact path="/message">
            <MessagePage />
          </Route>

          <Route exact path="/form">
            <Form />
          </Route>
          <Route exact path="/profil">
            <Profil />
          </Route>

          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="">
            <Header />
            <Body />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

/*const mapStoreToProps = (state) => {

  return{
  };
};

const mapDispatchToProps = (dispatch) => ({
getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Homepage);*/

export default App;
