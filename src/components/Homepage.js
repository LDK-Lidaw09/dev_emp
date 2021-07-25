import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import styled from 'styled-components';
import Header from "../components/Header"

const Homepage = (props) => {
  //const{handleLogOut}=props;
  return (
    <div className="Homepage">
    <Router>
        <Switch>
          <Route path="">
            <Header />
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
};

export default Homepage;
