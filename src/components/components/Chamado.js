import React, {Component} from 'react';
import '../../App.css';
import './Chamado.css';
import {Card, ListGroup} from 'react-bootstrap';

let headerCard = {
  backgroundColor: 'red',
  width: '24rem',
  height: '4rem',
  marginLeft: '-18px',
  marginTop: '12px',
  textAlign: 'center',
  color: 'white',
  fontSize: '23px'
}



class Chamado extends Component{
  render(){
    return(
      <div>
      <Card border="light" style={{ width: '22rem' }}>
        <Card.Header style={headerCard}>Assunto do chamado</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Área do chamado: Ti</ListGroup.Item>
            <ListGroup.Item>Quem abriu o chamado: UsuárioTeste</ListGroup.Item>
            <ListGroup.Item>Descrição do chamado: Esse é um chamado de teste e serve apenas para demonstração</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      </div>
    );
  }
}

export default Chamado;
