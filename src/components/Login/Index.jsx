import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import loginGif from '../../assets/Spinner-1s-200px.gif'
import './Style.css';
import { InputGeneric } from '../../utils/InputGenericFull';
import { BtnGeneric } from '../../utils/BtnGeneric/Btn.Generic';
import { CadLogin } from '../CadLogin/Index';
import { AuthContext } from '../../utils/auth/authComponents';
import { useContext } from 'react';


export const LoginComponents = () => {
  const navigate = useNavigate();

  const [msgLogin, setMsglogin] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setAuth} = useContext(AuthContext)

  const handleEmail = (novoValor) => {
    setEmail(novoValor);
  };

  const handleEsqueciSenha = ()=>{
    alert('Função a ser implementada')
  }

  const handlePasswoord = (novoValor) => {
    setPassword(novoValor);
  };

  const redirectLogin = (event) => {
    event.preventDefault();
    const login = JSON.parse(localStorage.getItem('users'));
    if (login) {
      if (email === login.email && password === login.password) {
        setShowAnimation(true);
        setAuth({
          user: login,
          isLogged: true,
        })

        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    }
    setMsglogin(true);
  };

  return (
    <div className="login-container">
      <h4 style={{backgroundColor:'transparent'}}>Acesso de Funcionários</h4>
      <Form className="loginForm " onSubmit={redirectLogin}>
        {showAnimation ? (
          <div style={{ textAlign: 'center', backgroundColor: 'white' }}>
            <img src={loginGif} style={{ backgroundColor: 'white' }} alt="Loading..." />
            <p style={{ backgroundColor: 'white' }}>Fazendo login...</p>
          </div>
        ) : (
          <>
          
            <InputGeneric style='loginInput' type="email" value={email} placeholder="Digite seu email." onChange={handleEmail} label="Email" />
            <InputGeneric style='loginInput' type="password" value={password} placeholder="Digite seu password." onChange={handlePasswoord} label="Password" />
            {msgLogin && <span style={{ color: 'red', fontSize: '11px', display: 'block', marginLeft: '10px' }}>email ou senha inválidos</span>}
            <div style={{ display: 'inline-block', backgroundColor: 'white' }}>
              <BtnGeneric type="submit" nomeBtn="Login" funcao="cadastrar" />
              <CadLogin />
              <a href="#" style={{ color: '#a7a8f4', fontWeight: '600', textDecoration: 'none', backgroundColor: 'white', marginLeft: '10px', marginRight: '10px' }} onClick={handleEsqueciSenha}>Esqueci minha senha</a>
            </div>
          </>
        )}
      </Form>

    </div>
  );
};
