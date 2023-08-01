import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Col, Button, Modal } from "react-bootstrap"
import { InputGeneric } from "../../utils/InputGenericFull";
import './Style.css'


export const CadLogin = () => {
    const [show, setShow] = useState(false);
    const [cadastroSucesso, setCadastroSucesso] = useState(false);
    let validaPassword = true


    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNome = (novoValor) => {
        setNome(novoValor);
    };
    const handleEmail = (novoValor) => {
        setEmail(novoValor);
    };
    if (password.length >= 8) {
        validaPassword = false
    }
    const handlePassword = (novoValor) => {
        setPassword(novoValor);
    };


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const handleCadLogin = (event) => {
        event.preventDefault()
        let users = JSON.parse(localStorage.getItem('users')) || {};
        if (users.hasOwnProperty(email)) {
            alert('Usuário já cadastrado')
            handleClose();
            return

        }
        users = {
            email: email,
            password: password,
            nome: nome,
        }
        
        localStorage.setItem('users', JSON.stringify(users))
        setCadastroSucesso(true);
        handleClose();
        setTimeout(() => {
            setCadastroSucesso(false);
        }, 2500);
    }

    const modalAnimation = useSpring({
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(-100%)',

    });

    return (
        <>
            <Button className="cancelar" onClick={handleShow}>
                Cadastrar
            </Button>
            <animated.div style={modalAnimation}>
                <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton className="bodyModal">
                        <Modal.Title className="tituloModal">Cadastro de Funcionários</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="bodyModal">
                        <Col className="bodyModal">
                            <InputGeneric style='inputCadLogin' type="text" value={nome} placeholder="Digite seu Nome ..." onChange={handleNome} label="Nome" />
                            <InputGeneric style='inputCadLogin' type="email" value={email} placeholder="Digite seu email ..." onChange={handleEmail} label="Email" />
                            <InputGeneric style='inputCadLogin' type="password" value={password} placeholder="Digite sua senha ..." onChange={handlePassword} label="Senha" />

                        </Col>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>

                        <Button variant="primary" onClick={handleCadLogin} disabled={validaPassword}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </animated.div>


            {cadastroSucesso && (
                <animated.div style={{ textAlign: 'center', marginTop: '20px', fontSize: '15px', color: 'green', fontWeight: 'bold' }}>
                    Cadastro efetuado com sucesso!
                </animated.div>
            )}
        </>
    );
}