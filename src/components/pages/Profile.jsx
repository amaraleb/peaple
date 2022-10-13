import React from 'react'
import Default from "../templates/Default"
import profile from "../../img/profile.jpeg"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { BsPersonLinesFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom"

export default function Profile() {
  const navigate = useNavigate();
    const home = () => {
        navigate('/')
    }
  return (
    <Default>
      <div class="art art-profile">
            <img className="img-profile-edit" src={profile} alt="" />
            <div id="bio" className="user-pwd-container">
                <InputGroup >
                    <Form.Control as="textarea" rows={3} id="bio-input" className="input" placeholder="bio" aria-label="bio" />
                </InputGroup>
            </div>
            <div className="user-pwd-container">
                <label for="login"><BsPersonLinesFill className="i" /></label>
                <InputGroup>
                    <Form.Control className="input" placeholder="Nome" aria-label="fname" />
                </InputGroup>
            </div>
            <div className="user-pwd-container">
                <label for="login"><BsPersonLinesFill className="i" /></label>
                <InputGroup>
                    <Form.Control className="input" placeholder="Sobrenome" aria-label="lname" />
                </InputGroup>
            </div>
            <div id="btn-container">
                <Button id="buttonlg" className="button">Atualizar</Button>{' '}
                {/* <Button onClick={home} className="button buttonML">Já cadastrado</Button>{' '} */}
            </div>
        </div>
    </Default>
  )
}
