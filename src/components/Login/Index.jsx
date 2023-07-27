import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import loginGif from '../../assets/Spinner-1s-200px.gif'
import './Style.css';
import { InputGeneric } from '../../utils/InputGenericFull';
import { BtnGeneric } from '../../utils/BtnGeneric/Btn.Generic';


export const LoginComponents = () => {
    const navigate = useNavigate();
  
    const [msgLogin, setMsglogin] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false);
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmail = (novoValor) => {
      setEmail(novoValor);
    };
  
    const handlePasswoord = (novoValor) => {
      setPassword(novoValor);
    };
  
    const redirectLogin = (event) => {
      event.preventDefault();
      const login = JSON.parse(localStorage.getItem('user'));
      if (login) {
        if (email === login.email && password === login.password) {
          setShowAnimation(true);
          setTimeout(() => {
            navigate('/home');
          }, 2000);
        }
      }
      setMsglogin(true);
    };
  
    return (
      <Form className="loginForm " onSubmit={redirectLogin}>
        {showAnimation ? (
          <div style={{ textAlign: 'center' }}>
            <img src={loginGif} alt="Loading..." />
            <p>Fazendo login...</p>
          </div>
        ) : (
          <>
            <InputGeneric type="email" value={email} placeholder="Digite seu email." onChange={handleEmail} label="Email" />
            <InputGeneric type="password" value={password} placeholder="Digite seu password." onChange={handlePasswoord} label="Password" />
            {msgLogin && <span style={{ color: 'red', fontSize: '11px', display: 'block', marginLeft: '10px' }}>email ou senha inválidos</span>}
            <div className="d-flex" style={{ backgroundColor: 'white' }}>
              <BtnGeneric type="submit" nomeBtn="Login" funcao="cadastrar" />
              <BtnGeneric nomeBtn="Cadastrar"funcao="cadastrar" />
            </div>
          </>
        )}
      </Form>
    );
  };
  