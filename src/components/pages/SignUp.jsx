import React from 'react'
import peapleicon from "../../img/peaple.png";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { BsEnvelope } from "react-icons/bs";
import { BsPersonLinesFill } from "react-icons/bs";
import { BsLock } from "react-icons/bs";
import { BsLockFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom"

export default function SignUp() {
    const navigate = useNavigate();
    const home = () => {
        navigate('/')
    }
  return (
    <div>
        <div>
            <img id="logo" src={peapleicon} alt="Logo" />
        </div>
        <div class="art art-cadastro">
            <h1 id="title">Cadastre-se</h1>
            <div className="user-pwd-container">
                <label for="login"><BsEnvelope className="i" /></label>
                <InputGroup>
                    <Form.Control placeholder="E-mail" aria-label="login" />
                </InputGroup>
            </div>
            <div className="user-pwd-container">
                <label for="login"><BsPersonLinesFill className="i" /></label>
                <InputGroup>
                    <Form.Control placeholder="Nome" aria-label="fname" />
                </InputGroup>
            </div>
            <div className="user-pwd-container">
                <label for="login"><BsPersonLinesFill className="i" /></label>
                <InputGroup>
                    <Form.Control placeholder="Sobrenome" aria-label="lname" />
                </InputGroup>
            </div>
            <div className="user-pwd-container">
                <label for="login"><BsLock className="i" /></label>
                <InputGroup>
                    <Form.Control placeholder="Senha" aria-label="senha" />
                </InputGroup>
            </div>
            <div className="user-pwd-container">
                <label for="login"><BsLockFill className="i" /></label>
                <InputGroup>
                    <Form.Control placeholder="Confirmar senha" aria-label="confsenha" />
                </InputGroup>
            </div>
            <div id="btn-container">
                <Button className="button buttonMR">Enviar</Button>{' '}
                <Button onClick={home} className="button buttonML">Já cadastrado</Button>{' '}
            </div>
        </div>
        
    </div>
  )
}
