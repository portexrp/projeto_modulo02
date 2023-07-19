import Card from 'react-bootstrap/Card';
import {ImStatsDots} from 'react-icons/im'

import './Style.css'

export const Estatisticas = ({quantidade, tipo})=>{
    return (
        <Card className='cardElement' style={{minWidth: '13rem' ,width: '27.5%', height: '8vw', display:'inline-block', textAlign:'center' }}>
        <Card.Body>
          <Card.Title>{quantidade} <ImStatsDots style={{ marginLeft: '5px', color: '#a7a8f4', backgroundColor: 'white'}}/></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{tipo}</Card.Subtitle>
        </Card.Body>
      </Card>
    )
}