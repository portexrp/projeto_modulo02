import { Header } from "../../components/Header/Index"
import { Sidebar } from "../../components/Sidebar/Index"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CadExame } from "../../components/CadExame/Index"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../utils/auth/authComponents";
import { useContext } from "react";

export const ExamePage = () => {
    const { auth } = useContext(AuthContext)
    const render = () => {
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

    return auth.isLogged ? render() : <Navigate to={'/login'}/>

}