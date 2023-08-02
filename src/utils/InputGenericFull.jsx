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

export const InputGeneric = ({ type, value, name, placeholder,required, onChange, label, style }) => {
    const [inputError, setError] = useState('');

    if (type == 'email') {

        const handleInput = (event) => {
            const novoValor = event.target.value;
            const emailRegex = /^\S+@\S+\.\S+$/;
    
            if (!emailRegex.test(novoValor)) {
                setError('Por favor, insira um email válido.');
            } else {
                setError('');
            }
            onChange(novoValor);
        }
        return (
            <Form.Group className={'formGroup '+style}>
                <Form.Label aria-label={label} >{label} {inputError && <span style={{opacity: '1', fontSize: '12px'}}>{inputError}</span>}</Form.Label>
                <Form.Control type={type} name={name} value={value} placeholder={placeholder} onChange={handleInput} required={required} />
                
            </Form.Group>
        )

    }
    if (type == 'password') {
        const handleInput = (event) => {
            const novoValor = event.target.value;
            if (novoValor.length < 8) {
                setError('Min. 8 caracteres!');
            } else {
                setError('');
            }
    
            onChange(novoValor);
        }
        return (
            <Form.Group className={'formGroup '+style}>
                <Form.Label aria-label={label} >{label} {inputError && <span style={{opacity: '1', fontSize: '12px'}}>{inputError}</span>}</Form.Label>
                <Form.Control type={type} name={name} value={value} placeholder={placeholder} onChange={handleInput} required={required} />
                
            </Form.Group>
        )

    }

    const handleInput = (event) => {
        const novoValor = event.target.value;
        onChange(novoValor);
    }

    return (
        
        <Form.Group className={' formGroup '+style} >
            <Form.Label aria-label={label} >{label}</Form.Label>
            <Form.Control  type={type} name={name} value={value} placeholder={placeholder} onChange={handleInput} required={required} />
        </Form.Group>
    )

}