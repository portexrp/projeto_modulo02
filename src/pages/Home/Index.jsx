import { Header } from "../../components/Header/Index"
import { Sidebar } from "../../components/Sidebar/Index"
import { Estatisticas } from "../../components/Estatisticas/Index"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RiMedicineBottleLine } from 'react-icons/ri';

export const HomePage = () => {
    return (
        <>
            <Header />
            <Container fluid className="home">
                <Row>
                    <Col className="d-flex home">
                        <Sidebar />
                        <Col>
                        <Row>
                            <Col className="text-center" style={{marginTop: '30px', marginRight: 'auto'}}><h2>Estatisticas do Sistema</h2></Col>
                        </Row>
                            <Estatisticas quantidade='14' fluid tipo='Total Exames'></Estatisticas>
                            <Estatisticas quantidade='75' fluid tipo='Total Consultas'></Estatisticas>
                            <Estatisticas quantidade='90' fluid tipo='Total Cadastros'></Estatisticas>
                        </Col>

                    </Col>
                </Row>
            </Container >
        </>
    )
}