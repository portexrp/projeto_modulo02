import './Style.css'
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { BtnGeneric } from '../../utils/BtnGeneric/Btn.Generic';
import { InputGeneric } from '../../utils/InputGenericFull';

export const CadConsulta = () => {
    return (
        <Form className='formStyle'>
            <InputGeneric style='lista' type="text" value={''} placeholder="Motivo da Consulta..." onChange={''} label="Motivo da Consulta" />
            <InputGeneric style='all' type="date" value={''} placeholder="Data de Consulta." onChange={''} label="Dt. Consulta" />            
            <InputGeneric style='all' type="text" value={''} placeholder="Horário da consulta." onChange={''} label="Horário da consulta" />
            <InputGeneric style='lista' type="text" value={''} placeholder="Descrição" onChange={''} label="Descrição" />
            <InputGeneric style='lista' type="text" value={''} placeholder="Medicação Receitada." onChange={''} label="Medicação Receitada" />
            <InputGeneric style='lista' type="email" value={''} placeholder="Dosagem e Precauções." onChange={''} label="Dosagem e Precauções" />

            <Row>
            <Col>
                    <div className='formBtn' style={{ backgroundColor: "white", borderRadius:'16px', paddingTop:'20px', marginTop:'-11px'}}>
                        <BtnGeneric type="submit" nomeBtn="Salvar" funcao="cadastrar" />
                        <BtnGeneric type="submit" nomeBtn="Editar" funcao="editar" />
                        <BtnGeneric type="submit" nomeBtn="Excluir" funcao="excluir" />
                    </div >
                </Col>

            </Row>
        </Form>
    )
}