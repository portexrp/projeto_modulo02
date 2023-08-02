import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CgProfile } from 'react-icons/cg';
import { AuthContext } from '../../utils/auth/authComponents';
import './Style.css'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {

    const {auth} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = ()=>{
        auth.isLogged = false
        navigate('/login')
    }
    return (
        <Navbar expand="lg" className="header">
            <Container fluid className='header'>
                <Navbar.Brand className="header" href="#home">LAB - Medicine</Navbar.Brand>
                <Nav className="ms-auto header d-flex">                        
                        <Nav.Link className="header d-flex" href="#perfil">                            
                            <CgProfile  size={20} style={{marginRight: '5px', marginTop: '2px'}} className="mr-2 header" />                        
                             {auth.user.nome}
                        </Nav.Link>  
                        <Nav.Link className="header d-flex" onClick={handleLogout}>                            
                            Sair
                        </Nav.Link>                      
                    </Nav>
            </Container>            
        </Navbar>
    );
}