import Card from 'react-bootstrap/Card';
import { CgProfile } from 'react-icons/cg';
import './Style.css'

export const CardPaciente = () => {
    return (
        <Card style={{ width: '27%',minWidth:'180px', marginLeft: '40px' }} className='text-center card'>
            <CgProfile size={80} style={{marginTop: '10px' ,marginLeft: 'auto', marginRight: 'auto', backgroundColor:'white', color: '#a7a8f4'}} />
            <Card.Body>
                <Card.Title>Reinaldo Porto</Card.Title>
                <Card.Text>
                    30 anos
                </Card.Text>
                <Card.Text>
                    016 - 9 9288-1275
                </Card.Text>
                <Card.Text>
                    Sem plano
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link style={{ color: '#a7a8f4', backgroundColor:'white', fontWeight: '600'}} href="#">Ver mais</Card.Link>
            </Card.Body>
        </Card>
    )
}