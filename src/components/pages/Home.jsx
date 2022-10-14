import React from "react";
import peapleicon from "../../img/peaple.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillLockFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const signUp = () => {
    navigate("/signup");
  };

  const enter = () => {
    navigate(`/timeline/${localStorage.getItem("currentUser")}`)
  }



  const [login, setLogin] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const log = {"email": login, "password": pwd};
  //const [token, setToken] = React.useState()
  //const [currentUser, setCurrentUser] = React.useState();

  



  const handleLoginClick = () => {
    fetch("http://localhost:8080/user/login/", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(log)
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "Login autorizado") {
            localStorage.setItem("token", result.token);
            localStorage.setItem("currentUser", result.id);
            localStorage.setItem("userselect", result.id);
            
            if(localStorage.getItem("currentUser")) {enter();}
        } else {
          alert("usuário ou senha incorretos");
        }
      });
  };

  return (
    <div>
      <div>
        <img id="logo" src={peapleicon} alt="Logo" />
      </div>
      <div className="art">
        <h1 id="title">Bem vindo!</h1>
        <div className="user-pwd-container">
          <label for="login">
            <BsFillPersonFill className="i" />
          </label>
          <InputGroup>
            <Form.Control
              placeholder="usuário"
              aria-label="login"
              value={login}
              onChange={(event) => setLogin(event.target.value)}
            />
          </InputGroup>
        </div>
        <div className="user-pwd-container">
          <label for="login">
            <BsFillLockFill className="i" />
          </label>
          <InputGroup>
            <Form.Control
              placeholder="senha"
              aria-label="password"
              value={pwd}
              onChange={(event) => setPwd(event.target.value)}
            />
          </InputGroup>
        </div>
        <div id="btn-container">
          <Button onClick={handleLoginClick} className="button buttonMR">
            Entrar
          </Button>{" "}
          <Button onClick={signUp} className="button buttonML">
            Cadastre-se
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
