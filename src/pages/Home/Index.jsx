import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Header } from "../../components/Header/Index"
import { Sidebar } from "../../components/Sidebar/Index"
import { Estatisticas } from "../../components/Estatisticas/Index"
import { SearchPaciente } from "../../components/SearchPacientes/Index";
import { CardPaciente } from "../../components/card/Index";
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../utils/auth/authComponents';

export const HomePage = () => {
    const {auth} = useContext(AuthContext)
    const render = () =>{
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
                                <Row>
                                    <Col>
                                    <SearchPaciente/>
                                    </Col>
                                </Row>
    
                                <Row>
                                    <Col>
                                    <CardPaciente/>
                                    </Col>
                                </Row>
    
                            </Col>
    
                        </Col>
                    </Row>
                </Container >
            </>
        )

    }

    return auth.isLogged ? render() : <Navigate to={'/login'}/>

}