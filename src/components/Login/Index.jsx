import { useNavigate } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import './Style.css'
import { InputGeneric } from "../../utils/InputGenericFull";
import { useState } from "react";
import { BtnGeneric } from "../../utils/BtnGeneric/Btn.Generic";

export const LoginComponents = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (novoValor) => {
        setEmail(novoValor)
    }

    const handlePasswoord = (novoValor) => {
        setPassword(novoValor)
    }

    const redirectLogin = () => {
        navigate('/home')
    }



    return (

        <Form className="loginForm " onSubmit={redirectLogin}>

            <InputGeneric type="email" value={email} placeholder="Digite seu email." onChange={handleEmail} label="Email" />
            <InputGeneric type="password" value={password} placeholder="Digite seu password." onChange={handlePasswoord} label="Password" />

            <div className="d-flex" style={{backgroundColor: "white"}}>
                <BtnGeneric type="submit" nomeBtn="Login" funcao="cadastrar" />
                <BtnGeneric type="submit" nomeBtn="Cadastrar" funcao="cadastrar" />
            </div >
        </Form>
    )
}