{/*
type: text, password, number, etc
placeholder: textos dos input
value: valor do input
função: onChange, onInput, etc
aria-label: Acessibilidade
label: texto do imput
type, value, placeholder, funcao, label
*/}


import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './Style.css'

export const InputGeneric = ({ type, value, placeholder, onChange, label, style }) => {
    const [emailError, setEmailError] = useState('');

    const handleInput = (event) => {
        const novoValor = event.target.value;
        const emailRegex = /^\S+@\S+\.\S+$/;

        if (!emailRegex.test(novoValor)) {
            setEmailError('Por favor, insira um email válido.');
        } else {
            setEmailError('');
        }
        onChange(novoValor);
    }

    if (type == 'email') {
        return (
            <Form.Group className={'formGroup '+style}>
                <Form.Label aria-label={label} >{label} {emailError && <span style={{opacity: '1', fontSize: '12px'}}>{emailError}</span>}</Form.Label>
                <Form.Control type={type} value={value} placeholder={placeholder} onChange={handleInput} />
                
            </Form.Group>
        )

    }
    return (
        <Form.Group className={' formGroup '+style} >
            <Form.Label aria-label={label} >{label}</Form.Label>
            <Form.Control  type={type} value={value} placeholder={placeholder} onChange={handleInput} />
        </Form.Group>
    )

}