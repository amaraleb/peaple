import React from 'react';
import peapleicon from "../../img/peaple.png";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillLockFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate();
    const signUp = () => {
        navigate('/signup')
    }
  return (
    <div>
        <div>
            <img id="logo" src={peapleicon} alt="Logo" />
        </div>
        <div className="art">
            <h1 id="title">Bem vindo!</h1>
            <div className="user-pwd-container">
                <label for="login"><BsFillPersonFill className="i" /></label>
                <InputGroup>
                    <Form.Control placeholder="usuário" aria-label="login" />
                </InputGroup>
            </div>
            <div className="user-pwd-container">
                <label for="login"><BsFillLockFill className="i" /></label>
                <InputGroup>
                    <Form.Control placeholder="senha" aria-label="login" />
                </InputGroup>
            </div>
            <div id="btn-container">
                <Button className="button buttonMR">Entrar</Button>{' '}
                <Button onClick={signUp} className="button buttonML">Cadastre-se</Button>{' '}
            </div>

        </div>



    </div>
  )
}
