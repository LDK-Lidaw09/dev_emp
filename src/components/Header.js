import styled from "styled-components";
import { connect } from "react-redux";
//import {handleLogOut} from "../App"
import { signOutAPI } from "../actions";
import React, { useState, useEffect } from "react";
import fire from "../database/firebaseDb";
import Job from "../components/Jobs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = (props) => {
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);
  const { handleLogOut } = props;
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/job-search.png" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <Link to="/">
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </Link>
            </NavList>

            <NavList /*className="active"*/>
              <Link to={`/job`}>
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Emplois</span>
              </Link>
            </NavList>

            <NavList>
              <Link to="/message">
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messages</span>
              </Link>
            </NavList>
            <NavList>
              <Link to="/profil">
                <img src={currentUser.photoURL} alt=""  style={{height: "28px"}}  />
                <span>Profil</span>
              </Link>
            </NavList>

            <NavList>
              <Link to="/portfolio">

                {currentUser && currentUser.photoURL ? (
                  <img src={currentUser.photoURL} alt="" style={{height: "28px"}}  />
                ) : (
                  <img src="/images/user.svg" alt=""  style={{height: "28px"}} />
                )}
                <span>Portfolio</span>
              </Link>
            </NavList>


            <User>
              <a href="">
                {currentUser && currentUser.photoURL ? (
                  <img src={currentUser.photoURL} alt="" />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}

                <span>Me</span>
                <img src="/images/down-icon.svg" alt="" />
              </a>
              <SignOut onClick={() => props.signOut()}>
                <a /*href="/" onClick={handleLogOut}*/>Sign Out</a>
              </SignOut>
              
            </User>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #ccc;
  border-bottom: 1px solid rgba(0, 0, 0, 1);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;
/*const Link= styled.li`
   align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
`;*/

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
//export default Header;
