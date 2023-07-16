import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CgProfile } from 'react-icons/cg';
import './Style.css'

export const Header = () => {
    return (
        <Navbar expand="lg" className="header">
            <Container fluid className='header'>
                <Navbar.Brand className="header" href="#home">LAB - Medicine</Navbar.Brand>
                <Nav className="ms-auto header d-flex">                        
                        <Nav.Link className="header d-flex" href="#perfil">                            
                            <CgProfile  size={20} className="mr-2 header" />                        
                             Perfil
                        </Nav.Link>                        
                    </Nav>
            </Container>            
        </Navbar>
    );
}