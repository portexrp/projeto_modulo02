import './Style.css'
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { BtnGeneric } from '../../utils/BtnGeneric/Btn.Generic';
import { InputGeneric } from '../../utils/InputGenericFull';

export const CadPaciente = () => {
    return (
        <Form className='formStyle'>
            <InputGeneric style='nome' type="text" value={''} placeholder="Digite seu Nome ..." onChange={''} label="Nome" />
            <InputGeneric style='all' type="date" value={''} placeholder="Data de Nasc." onChange={''} label="Dt. Nasc." />
            <InputGeneric style='all' type="number" value={''} placeholder="Digite seu CPF." onChange={''} label="CPF" />
            <InputGeneric style='all' type="text" value={''} placeholder="Digite seu RG." onChange={''} label="RG" />
            <InputGeneric style='all' type="text" value={''} placeholder="Emissor" onChange={''} label="Emissor" />
            <InputGeneric style='all' type="text" value={''} placeholder="Digite seu Fone." onChange={''} label="Fone" />
            <InputGeneric style='all' type="email" value={''} placeholder="Digite seu Email." onChange={''} label="Email" />
            <InputGeneric style='all' type="text" value={''} placeholder="Naturalidade." onChange={''} label="Naturalidade" />
            <InputGeneric style='all' type="number" value={''} placeholder="Contato de emergencia." onChange={''} label="Contato de emergencia" />
            <InputGeneric style='all' type="text" value={''} placeholder="Convênio" onChange={''} label="Convênio" />
            <InputGeneric style='all' type="text" value={''} placeholder="Número do Convênio" onChange={''} label="Número do Convênio" />
            <InputGeneric style='lista' type="text" value={''} placeholder="Lista de Alergias" onChange={''} label="Lista de Alergias" />
            <InputGeneric style='lista' type="text" value={''} placeholder="Cuidados Específicos" onChange={''} label="Cuidados Específicos" />
            <InputGeneric style='all' type="data" value={''} placeholder="Validade do Convênio" onChange={''} label="Validade do Convênio" />
            <InputGeneric style='all' type="text" value={''} placeholder="CEP" onChange={''} label="CEP" />            
            <InputGeneric style='lista' type="text" value={''} placeholder="Logradouro" onChange={''} label="Logradouro" />
            <InputGeneric style='all' type="text" value={''} placeholder="Número" onChange={''} label="Número" />
            <InputGeneric style='all' type="text" value={''} placeholder="Complemento" onChange={''} label="Complemento" />
            <InputGeneric style='all' type="text" value={''} placeholder="Bairro" onChange={''} label="Bairro" />
            <InputGeneric style='all' type="text" value={''} placeholder="Cidade" onChange={''} label="Cidade" />
            <InputGeneric style='all' type="text" value={''} placeholder="Estado" onChange={''} label="Estado" />
            <InputGeneric style='all' type="text" value={''} placeholder="Ponto de referência" onChange={''} label="Ponto de referência" />
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