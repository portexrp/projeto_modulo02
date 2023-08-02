import './Style.css'
import Form from 'react-bootstrap/Form';
import { Row, Col, Button } from 'react-bootstrap';
import { BtnGeneric } from '../../utils/BtnGeneric/Btn.Generic';
import { InputGeneric } from '../../utils/InputGenericFull';
import loginGif from '../../assets/Spinner-1s-200px.gif'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CadExame = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const navigate = useNavigate();

    const [exame, setExame] = useState('');
    const handleExame = (novoValor) => {
        setExame(novoValor);
    };

    const [dtExame, setDtExame] = useState('');
    const handleDtExame = (novoValor) => {
        setDtExame(novoValor);
    };

    const [horario, setHorario] = useState('');
    const handleHorario = (novoValor) => {
        setHorario(novoValor);
    };

    const [tipoExame, setTipoExame] = useState('');
    const handleTipoExame = (novoValor) => {
        setTipoExame(novoValor);
    };

    const [laboratório, setLaboratório] = useState('');
    const handleLaboratório = (novoValor) => {
        setLaboratório(novoValor);
    };

    const [url, setUrl] = useState('');
    const handleUrl = (novoValor) => {
        setUrl(novoValor);
    };

    const [resultado, setResultado] = useState('');
    const handleResultado = (novoValor) => {
        setResultado(novoValor);
    };

    const data = {
        exame: exame,
        dtExame: dtExame,
        horario: horario,
        tipoExame: tipoExame,
        laboratório: laboratório,
        url: url,
        resultado: resultado,

    }

    const handleCadExame = (e)=>{
        e.preventDefault()
        
        localStorage.setItem('cadExame', JSON.stringify(data))
        setShowAnimation(true);
        setTimeout(() => {
            navigate('/');
          }, 2000);
    }

    return (
        <Form className='formStyle'>
                        {showAnimation ? (
                <div style={{ textAlign: 'center', backgroundColor: 'white' }}>
                    <img src={loginGif} style={{ backgroundColor: 'white' }} alt="Efetuando cadastro..." />
                    <p style={{ backgroundColor: 'white' }}>Efetuando cadastro</p>
                </div>
            ):(
                <>
            <InputGeneric style='lista' type="text" value={exame} placeholder="Nome do Exame..." onChange={handleExame} label="Exame" />
            <InputGeneric style='all' type="date" value={dtExame} placeholder="Data de Exame." onChange={handleDtExame} label="Dt. Exame" />            
            <InputGeneric style='all' type="text" value={horario} placeholder="Horário de retirada." onChange={handleHorario} label="Horário de retirada" />
            <InputGeneric style='lista' type="text" value={tipoExame} placeholder="Tipo do Exame" onChange={handleTipoExame} label="Tipo do Exame" />
            <InputGeneric style='lista' type="text" value={laboratório} placeholder="Laboratório." onChange={handleLaboratório} label="Laboratório" />
            <InputGeneric style='lista' type="email" value={url} placeholder="URL do Documento." onChange={handleUrl} label="URL do Documento" />
            <InputGeneric style='lista' type="email" value={resultado} placeholder="Resultado." onChange={handleResultado} label="Resultado" />

            <Row>
            <Col>
                    <div className='formBtn' style={{ backgroundColor: "white", borderRadius:'16px', paddingTop:'20px', marginTop:'-11px'}}>
                    <Button type='submit' className='baseBtn cadastrar' onClick={handleCadExame}>Cadastrar</Button>
                        <BtnGeneric type="submit" nomeBtn="Editar" funcao="editar" />
                        <BtnGeneric type="submit" nomeBtn="Excluir" funcao="excluir" />
                    </div >
                </Col>

            </Row>
            </>
                    )}
        </Form>
    )
}