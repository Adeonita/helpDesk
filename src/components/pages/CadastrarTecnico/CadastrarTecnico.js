import React, {Component} from 'react';
import './CadastrarTecnico.css';
import {Container, Row, Col} from 'react-bootstrap';
import FormCadastrarTecnico from '../../components/FormCadastrarTecnico';

class CadastrarTecnico extends Component {
  render(){
    return(
      <div>
        <Container>
        <h1>Cadastrar Técnico</h1>
          <Row>
            <Col>
              <FormCadastrarTecnico />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CadastrarTecnico;
