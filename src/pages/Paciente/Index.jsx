import { Header } from "../../components/Header/Index"
import { Sidebar } from "../../components/Sidebar/Index"
import Container from 'react-bootstrap/Container';
import { CadPaciente } from "../../components/CadPaciente/Index";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const PacientePage = () => {
    return (
        <>
            <Header />
            <Container fluid className="home">
                <Row>
                    <Col className="d-flex home">
                        <Sidebar />
                        <Col>
                            <CadPaciente/>
                        </Col>


                    </Col>
                </Row>
            </Container >
        </>

    )
}