import { Header } from "../../components/Header/Index"
import { Sidebar } from "../../components/Sidebar/Index"
import Container from 'react-bootstrap/Container';
import { CadConsulta } from "../../components/CadConsulta/Index";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const ConsultaPage = () => {
    return (
        <>
            <Header />
            <Container fluid className="home">
                <Row>
                    <Col className="d-flex home">
                        <Sidebar />
                        <Col>
                            <CadConsulta/>
                        </Col>


                    </Col>
                </Row>
            </Container >
        </>

    )
}