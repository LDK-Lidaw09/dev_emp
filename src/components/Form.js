import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const Form = (props) => {
  const [name, setName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [message, setMessage] = useState("");

  const isEmail = () => {
    let mail = document.getElementById("not-mail");
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      mail.style.display = "none";
      return true;
    } else {
      mail.style.display = "block";
      mail.style.animation = "dongle 1s";
      setTimeout(() => {
        mail.style.animation = "none";
      }, 1000);
      return false;
    }
  };

  const failMessage = (message) => {
    let formMess = document.querySelector(".form-message");

    formMess.innerHTML = message;
    formMess.style.opacity = "1";
    formMess.style.background = "rgba(253,87,87)";

    document.getElementById("name").classList.add("error");
    document.getElementById("email").classList.add("error");
    document.getElementById("message").classList.add("error");

    setTimeout(
      () => {
        formMess.style.opacity = "1";
      },

      5000
    );
  };

  const succesMessage = () => {
    let formMess = document.querySelector(".form-message");
    formMess.innerHTML =
      "Message envoyé avec succès. Nous vous recontacterons dès que possible";
    formMess.style.opacity = "0";
    formMess.style.background = "#00c1ec";

    document.getElementById("name").classList.remove("error");
    document.getElementById("email").classList.remove("error");
    document.getElementById("message").classList.remove("error");

    setTimeout(
      () => {
        formMess.style.opacity = "1";
      },

      5000
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && isEmail() && message) {
      sendFeedback("template_jo4aj0n", {
        name,
        firstname,
        phone,
        email,
        linkedin,
        message,
      });
    } else {
      failMessage("Merci de remplir correctement les champs requis");
    }
  };

  const sendFeedback = (templateId, variables) => {
    emailjs
      .send(
        "service_elatqr5",
        "template_jo4aj0n",
        variables,
        "user_XdBrNFsocwYaFQogSUggm"
      )
      .then((res) => {
        succesMessage();
        setName("");
        setFirstName("");
        setPhone("");
        setEmail("");
        setLinkedin("");
        setMessage("");
      })
      .catch((err) => {
        failMessage("Une erreur s'est produite, veuillez réessayer.");
      });
  };

  return (
    <Container>
      <div className="form">
        <h2>Contactez-nous</h2>

        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="nom *"
          value={name}
          autoComplete="off"
          required
        />
        <input
          type="text"
          id="firstname"
          name="firstname"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Prénoms"
          value={firstname}
          required
        />
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="téléphone"
          value={phone}
          required
        />
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
            autoComplete="off"
            required
          />
        </div>
        <input
          type="text"
          id="linkedin"
          name="linkedin"
          onChange={(e) => setLinkedin(e.target.value)}
          placeholder="Linkedin"
          value={linkedin}
          required
        />
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
          required
        />
        <input
          className="button"
          type="button"
          value="Envoyer"
          onClick={handleSubmit}
        />
        <div className="form-message"></div>
      </div>
    </Container>
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
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 1s;
  * {
    padding: 0;
    border: none;
    outline: none;
  }

  body {
    background: #504e4e;
    color: #18dcff;
  }
  .form {
    margin: 3rem auto 0;
    max-width: 50%;
    max-width: 500px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border: 1px solid #18dcff;
    background: #363434;
    padding: 0 30px 10px;
    box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.637);
    border-radius: 5%;
  }
  h2 {
    margin-top: 35px;
    text-align: center;
  }
  .form-content {
    display: grid;
    grid-template-rows: repeat(4, 1fr) 105px;
  }
  input,
  textarea {
    background: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.1rem;
    border-bottom: 1px solid#cec950;
    color: #18dcff;
  }
  input::placeholder,
  textarea::placeholder {
    color: rgb(190, 188, 188);
  }
  input,
  .email-content,
  textarea {
    width: 90%;
    margin: 0 auto;
  }
  input {
    padding: 24px 0 12px;
  }
  .email-content {
    position: relative;
    margin-right: 100px;
  }
  .email-content input {
    width: 100%;
  }
  #not-mail {
    display: none;
    position: absolute;
    top: 4px;
    color: #ff4d4d;
    right: 0;
    transform-origin: 50% 50%;
  }
  @keyframes dongle {
    0% {
      transform: translate(0px, 0px);
    }
    10% {
      transform: translate(-10px, 0px);
    }
    20% {
      transform: translate(10px, 0px);
    }
    30% {
      transform: translate(-10px, 0px);
    }
    40% {
      transform: translate(10px, 0px);
    }
    50% {
      transform: translate(-10px, 0px);
    }
    60% {
      transform: translate(10px, 0px);
    }
    70% {
      transform: translate(-10px, 0px);
    }
    80% {
      transform: translate(10px, 0px);
    }
    90% {
      transform: translate(-10px, 0px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
  textarea {
    resize: none;
    padding: 24px 0;
  }
  .button {
    font-size: 1.3rem;
    margin-top: 15px;
    color: #cec950;
    border: none;
    cursor: pointer;
    transition: 0.2s;
    width: 100%;
  }
  .button:hover {
    letter-spacing: 2px;
  }
  .error::placeholder {
    color: #ff4d4d;
  }
  .form-message {
    margin-top: 10px;
    padding: 12px;
    opacity: 0;
    transition: 0.2s ease;
    color: black;
    border-radius: 4px;
    box-shadow: 0 0 2px rgba(51, 51, 51, 0.3);
  }
`;
export default Form;
