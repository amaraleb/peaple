import React from "react";
import Default from "../templates/Default";
import profile from "../../img/profile.jpeg";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { BsPersonLinesFill } from "react-icons/bs";
import Loading from "../atoms/Loading";
import ReactDOM from 'react-dom'

export default function Profile() {
  

  const [bio, setBio] = React.useState("");
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const patch = { "bio": bio, "fname": fname, "lname": lname };
  const [loading, setLoading] = React.useState(true);
const [bioRead, setBioRead] = React.useState("");
const [fnameRead, setFnameRead] = React.useState("");
const [lnameRead, setLnameRead] = React.useState("");

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("authorization", localStorage.getItem("token"));

  const currentUser = localStorage.getItem("currentUser");

  React.useEffect(() => {
    fetch(`http://localhost:8080/user/`)
      .then((response) => response.json())
      .then((data) => {
        const user = data.filter((item) => item._id === currentUser);
        setBioRead(user[0].bio)
        setFnameRead(user[0].fname)
        setLnameRead(user[0].lname)
        setLoading(false);
      });
  }, [currentUser]);

  const handlePatchClick = () => {
    fetch(`http://localhost:8080/user/${currentUser}/`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(patch),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "Usuário atualizado com sucesso!") {
            const element = <p className="sucess">Usuário atualizado com sucesso!</p>;
            ReactDOM.render(element, document.getElementById('message'));
        } else {
            const element = <p className="fail">Falha na atualização, tente novamente mais tarde</p>;
            ReactDOM.render(element, document.getElementById('message'));
        }
      });
  };
  
 

  

  return loading ? (
    <Loading />
  ) : (
    <Default>
        <div id="message"></div>
      <div class="art art-profile">
        <img className="img-profile-edit" src={profile} alt="" />
        <div id="bio" className="user-pwd-container">
          <InputGroup>
            <Form.Control
              as="textarea"
              rows={3}
              id="bio-input"
              className="input"
              placeholder="bio"
              defaultValue={bioRead}
              aria-label="bio"
              onChange={(event) => setBio(event.target.value)}
            />
          </InputGroup>
        </div>
        <div className="user-pwd-container">
          <label for="login">
            <BsPersonLinesFill className="i" />
          </label>
          <InputGroup>
            <Form.Control
              id="1"
              className="input"
              placeholder="Nome"
              defaultValue={fnameRead}
              aria-label="fname"
              onChange={(event) => setFname(event.target.value)}
            />
          </InputGroup>
        </div>
        <div className="user-pwd-container">
          <label for="login">
            <BsPersonLinesFill className="i" />
          </label>
          <InputGroup>
            <Form.Control
              className="input"
              placeholder="Sobrenome"
              defaultValue={lnameRead}
              aria-label="lname"
              onChange={(event) => setLname(event.target.value)}
            />
          </InputGroup>
        </div>
        <div id="btn-container">
          <Button onClick={handlePatchClick} id="buttonlg" className="button">
            Atualizar
          </Button>{" "}
          {/* <Button onClick={home} className="button buttonML">Já cadastrado</Button>{' '} */}
        </div>
      </div>
    </Default>
  );
}
