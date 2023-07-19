import './Style.css'
import { Navbar, Container, Form, Button, Col, Row } from 'react-bootstrap'

export const SearchPaciente = () => {
    return (
        <Navbar>
            <Container fluid>
                <Col>
                    <Form className="d-flex " style={{margin: '40px', opacity: '0.7'}}>
                        <Form.Control
                            type="search"
                            placeholder="Pesquisar paciente"
                            className="me-2"
                            aria-label="Pesquisar paciente"
                        />
                        <Button variant="outline-success">Pesquisar</Button>
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