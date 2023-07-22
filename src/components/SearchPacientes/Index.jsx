import './Style.css'
import { BtnGeneric } from '../../utils/BtnGeneric/Btn.Generic'
import {
    Navbar,
    Container,
    Form,
    Button,
    Col,
    Row
} from 'react-bootstrap'

export const SearchPaciente = () => {
    return (
        <Navbar>
            <Container fluid>
                <Col>
                    <Form className="d-flex searchButton" style={{ margin: '40px', opacity: '0.7' }}>
                        <Form.Control
                            type="search"
                            placeholder="Pesquisar paciente"
                            className="me-2"
                            aria-label="Pesquisar paciente"
                            style={{marginRight: '20px'}}
                        />
                        <BtnGeneric className='searchButton' type="submit" nomeBtn="Pesquisar" funcao="cadastrar" />
                    </Form>
                </Col>
                <Row>
                    <Col>

                    </Col>
                </Row>


            </Container>
        </Navbar>
    )
}