import React from "react";
import styled from "styled-components";
import {connect} from "react-redux"
import {signInAPI} from "../actions";
import {Redirect} from "react-router-dom";
const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <section className="login">
      { /*props.user &&
          <Redirect to ="/home"/>*/
      }
      
      <div className="loginContainer">
      <Logo>
      <img src="/images/avatar.svg" alt="" />
      <h2>
        Connexion
      </h2>
      </Logo>
        <label>Username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>

        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>

        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign in</button>
              <p>
                Don't have an account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignUp}>Sign up</button>
              
              <p>
              <Form>
                <Google onClick={() => props.signIn()}>
                  <img src="/images/google.svg" alt="" />
                  Sign in with Google
                </Google>
              </Form>
                Have an account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const Form = styled.div`

  
`;
const Logo = styled.div`
  svg,
  img {
    width: 100px;
    height: 100px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
    text-align:center;
    align-items: auto;
    margin-left: 38%;
  }
  h2{
    font-style:inherit;
    font-size: 3px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
  
`;
const mapStateToProps = (state) => {

  return{
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Login);
