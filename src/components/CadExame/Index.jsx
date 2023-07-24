import './Style.css'
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { BtnGeneric } from '../../utils/BtnGeneric/Btn.Generic';
import { InputGeneric } from '../../utils/InputGenericFull';

export const CadExame = () => {
    return (
        <Form className='formStyle'>
            <InputGeneric style='lista' type="text" value={''} placeholder="Nome do Exame..." onChange={''} label="Exame" />
            <InputGeneric style='all' type="date" value={''} placeholder="Data de Exame." onChange={''} label="Dt. Exame" />            
            <InputGeneric style='all' type="text" value={''} placeholder="Horário de retirada." onChange={''} label="Horário de retirada" />
            <InputGeneric style='lista' type="text" value={''} placeholder="Tipo do Exame" onChange={''} label="Tipo do Exame" />
            <InputGeneric style='lista' type="text" value={''} placeholder="Laboratório." onChange={''} label="Laboratório" />
            <InputGeneric style='lista' type="email" value={''} placeholder="URL do Documento." onChange={''} label="URL do Documento" />
            <InputGeneric style='lista' type="email" value={''} placeholder="Resultado." onChange={''} label="Resultado" />

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