{/* 
Botões genéricos
Cadastrar
Cancelar
Editar
Excluir
*/}

import Button from 'react-bootstrap/Button';
import './Style.css'
export const BtnGeneric = ({ type, nomeBtn, funcao }) => {

    switch (funcao) {
        case 'cadastrar':
            return (
            <Button className="baseBtn" id='cadBtn' aria-label="botão de cadastra" variant="primary" type={type}>
                {nomeBtn}
            </Button>
            )
            break;
        case 'cancelar':
            return (
            <Button className="baseBtn cancelar"aria-label="botão de cancelar" variant="" type={type}>
                {nomeBtn}
            </Button>
            )
            break;
        case 'editar':
            return (
            <Button className="baseBtn editar"aria-label="botão de editar" variant="primary" type={type}>
                {nomeBtn}
            </Button>
            )
            break;
        case 'excluir':
            return (
            <Button className="baseBtn excluir"aria-label="botão de excluir" variant="primary" type={type}>
                {nomeBtn}
            </Button>
            )
            break;

        default:
            return (
            <Button className="baseBtn"aria-label="botão de default" variant="primary" type={type}>
                {nomeBtn}
            </Button>
            )
            break;

    }

}