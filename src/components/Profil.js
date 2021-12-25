import React, { useState } from "react";
import styled from "styled-components";
import {db} from "../database/firebaseDb";

const Profil = () => {
  const [name, setName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [profession, setProfession] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [experience, setExperience] = useState("");
  const [github, setGithub] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState("");


  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoader('true')
     db.collection("profil").add({
        name:name,
        firstname:name,
        profession:profession,
        linkedin:linkedin,
        experience:experience,
        github:github,
        message:message,
    }).then(()=>{
        alert("Vos informations ont bien été enregistrées");
        setLoader("false")
    }).catch((error) =>{
        alert("Une erreur s'est produite. Veuillez bien remplir le formulaire")
        setLoader("false")
    });
    setName("");
    setFirstName("");
    setProfession("");
    setLinkedin("");
    setExperience("");
    setGithub("");
    setMessage("");
  }
  return (
    <Container className="profil" style ={{backgroundImage: `linear-gradient(to top right, #000008, #0008),url(/images/wave.png)`}}>
      <Form style ={{backgroundImage: `linear-gradient(to top right, #000008, #0008),url(/images/wave.png)`}}>
        <div >
        <img src="/images/avatar.svg" alt="" /> <br/>
          <label>Nom</label>
          <input
            type="text"
            name=""
            required
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Prenoms</label>
          <input
            type="text"
            name=""
            required
            placeholder="prenoms"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label>Profession</label>
          <input
            type="text"
            name=""
            required
            placeholder="profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
          <label>Linkedin</label>
          <input
            type="text"
            name=""
            required
            placeholder="lien Linkedin"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
          <label>Experiences</label>
          <select 
            type="text"
            name=""
            required
            placeholder="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}>
            <option value="aucune selection" >Selectionnez</option>
            <option value= "stage" >Stage</option>
            <option value="Nouveau_diplomé" >Nouveau diplômé</option>
            <option value="premier emploi">Premier emploi</option>
            <option value="confirmé">Confirmé</option>
          </select>
          <label>Github</label>
          <input
            type="text"
            name=""
            required
            placeholder="lien github"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
          <label>Message</label>
          <textarea
            type="text"
            required
            placeholder="Entrer un message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <Button  onClick={handleSubmit} style={{background: loader ? "#ccc": "#4caf50"}}>Valider</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  margin: auto;
  animation: fadeIn 1s;
`;
const Form = styled.div`
  text-align: center;
  margin: 3rem auto 0;
  max-width: 50%;
  max-width: 500px;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  label{
      color:white;
  }
  img {
    width: 100px;
    height: 100px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
    text-align:center;
    align-items: auto;
    margin-left: 0%;
  }
  input,
  textarea,select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;
const Button = styled.div`
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

export default Profil;
