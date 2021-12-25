import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route,  Link } from "react-router-dom";
//import Particles from "react-particles-js";



const Job = (props) => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (value.length > 0) {
      fetch("https://memoire-57233-default-rtdb.firebaseio.com/emplois.json")
        .then((response) => response.json())
        .then((responseData) => {
          setResult([]);
          let searchQuery = value.toLowerCase();
          for (const key in responseData) {
            let job = responseData[key].description.toLowerCase();
            if (job.slice(0, searchQuery.length).indexOf(searchQuery) !== -1) {
              setResult((prevResult) => {
                return [...prevResult, responseData[key].description];
              });
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setResult([]);
    }
  }, [value]);

  return (
    <div className="job">
       
      <Container style ={{backgroundImage: `linear-gradient(to top right, #000008, #0008),url(/images/wave.png)`}}>
     
        <h2>Rechercher des emplois et postuler</h2>
        
        <Search>
          <div>
            <input
              type="text"
              placeholder="Tapez des mots clés comme Recrutement, stage , offre ou autres"
              onChange={(event) => setValue(event.target.value)}
              value={value}
            />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
        <Content>
          <SharedJob>
            <div>
              {result.map((result, index) => (
                <div  key={index}>
                  <div>
                    {result}
                    <PostButton>
                      <Link to="/form">
                      <img src="/images/nav-jobs.svg" alt="" />
                        <span>Postuler</span>
                      </Link>
                    </PostButton>
                  </div>
                </div>
              ))}
            </div>
          </SharedJob>
        </Content>
      </Container>
    </div>
  );
};

const Container = styled.div`
 
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  color: black;
  //background-color: rgba(0, 0, 0, 0.8);
  // background-image: url("");
  animation: fadeIn 1s;
  h2 {
    text-align: center;
    padding-top: 40px;
    font-size: 50px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;
const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  padding-top: 100px;
  margin-left: 32%;
  text-align: center;
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
      width: 530px;
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
  padding-top: 100px;
`;
const SharedJob = styled.div`
  height: 100%;
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;
const PostButton = styled.button`
  width: 100px;
  text-align: center;
  margin-left: 454px;
  background-color: #0a66c2;
  border-radius: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  background: ${(props) => (props.disabled ? "rgba(0,0,0,0.8)" : "#0a66c2")};
  color: ${(props) => (props.disabled ? "rgba(1,1,1,0.2)" : "white")};
  &:hover {
    background: ${(props) => (props.disabled ? "rgba(0,0,0,0.08)" : "skyblue")};
  }
  svg {
    width: 24px;
    border-radius: 50%;
  }
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  span {
    display: flex;
    text-align: center;
    margin-left: 20px;
  }
`;

export default Job;
