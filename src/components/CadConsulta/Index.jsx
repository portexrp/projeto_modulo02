import './Style.css'
import Form from 'react-bootstrap/Form';
import { Row, Col, Button } from 'react-bootstrap';
import { BtnGeneric } from '../../utils/BtnGeneric/Btn.Generic';
import { InputGeneric } from '../../utils/InputGenericFull';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginGif from '../../assets/Spinner-1s-200px.gif'

export const CadConsulta = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const navigate = useNavigate();

    const [motivoConsulta, setMotivoConsulta] = useState('');
    const handleMotivoConsulta = (novoValor) => {
        setMotivoConsulta(novoValor);
    };

    const [dtConsulta, setDtConsulta] = useState('');
    const handleDtConsulta = (novoValor) => {
        setExame(novoValor);
    };

    const [horarioConsulta, setHorarioConsulta] = useState('');
    const handleHorarioConsulta = (novoValor) => {
        setHorarioConsulta(novoValor);
    };

    const [descricao, setDescricao] = useState('');
    const handleDescricao = (novoValor) => {
        setDescricao(novoValor);
    };

    const [mediReceitada, setMediReceitada] = useState('');
    const handleMediReceitada = (novoValor) => {
        setMediReceitada(novoValor);
    };

    const [dosagem, setDosagem] = useState('');
    const handleDosagem = (novoValor) => {
        setDosagem(novoValor);
    };

    const data = {
        motivoConsulta: motivoConsulta,
        dtConsulta: dtConsulta,
        horarioConsulta: horarioConsulta,
        descricao: descricao,
        mediReceitada: mediReceitada,
        dosagem: dosagem,
    }

    const handleCadConsulta = (e)=>{
        e.preventDefault()
        localStorage.setItem('cadConsulta', JSON.stringify(data))        
        setShowAnimation(true);
        setTimeout(() => {
            navigate('/');
          }, 2000);

    }

    return (
        <Form className='formStyle'>
                        {showAnimation ? (
                <div style={{ textAlign: 'center', backgroundColor: 'white' }}>
                    <img src={loginGif} style={{ backgroundColor: 'white' }} alt="Cadastrando Consulta..." />
                    <p style={{ backgroundColor: 'white' }}>Cadastrando Consulta</p>
                </div>
            ):(
                <>
            <InputGeneric style='lista' type="text" value={motivoConsulta} placeholder="Motivo da Consulta..." onChange={handleMotivoConsulta} label="Motivo da Consulta" />
            <InputGeneric style='all' type="date" value={dtConsulta} placeholder="Data de Consulta." onChange={handleDtConsulta} label="Dt. Consulta" />
            <InputGeneric style='all' type="text" value={horarioConsulta} placeholder="Horário da consulta." onChange={handleHorarioConsulta} label="Horário da consulta" />
            <InputGeneric style='lista' type="text" value={descricao} placeholder="Descrição" onChange={handleDescricao} label="Descrição" />
            <InputGeneric style='lista' type="text" value={mediReceitada} placeholder="Medicação Receitada." onChange={handleMediReceitada} label="Medicação Receitada" />
            <InputGeneric style='lista' type="email" value={dosagem} placeholder="Dosagem e Precauções." onChange={handleDosagem} label="Dosagem e Precauções" />

            <Row>
                <Col>
                    <div className='formBtn' style={{ backgroundColor: "white", borderRadius: '16px', paddingTop: '20px', marginTop: '-11px' }}>
                        <Button type='submit' className='baseBtn cadastrar' onClick={handleCadConsulta}>Cadastrar</Button>
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