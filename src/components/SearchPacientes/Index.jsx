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
                    <Form className="searchButton" style={{ margin: '40px', opacity: '0.7' }}>
                        <Form.Control
                            type="search"
                            placeholder="Pesquisar paciente"
                            aria-label="Pesquisar paciente"
                            style={{ marginBottom: '5px' }}
                        />
                        <BtnGeneric type="submit" nomeBtn="Pesquisar" funcao="cadastrar" />
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