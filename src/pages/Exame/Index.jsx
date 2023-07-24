import { Header } from "../../components/Header/Index"
import { Sidebar } from "../../components/Sidebar/Index"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CadExame } from "../../components/CadExame/Index"

export const ExamePage = () => {
    return (
        <>
            <Header />
            <Container fluid className="home">
                <Row>
                    <Col className="d-flex home">
                        <Sidebar />
                        <Col>
                            <CadExame />
                        </Col>


                    </Col>
                </Row>
            </Container >
        </>
    )
}