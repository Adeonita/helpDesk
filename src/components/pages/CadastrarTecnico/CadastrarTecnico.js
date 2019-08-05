import React, {Component} from 'react';
import './CadastrarTecnico.css';
import {Container, Row, Col} from 'react-bootstrap';
import FormCadastrarTecnico from '../../components/FormCadastrarTecnico';
import FooterRight from '../../components/FooterRight';
import FooterLeft from '../../components/FooterLeft';

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
        <div>
          <FooterRight color="#0F3882" />
          <FooterLeft color="#F24141" />
        </div>
      </div>
    );
  }
}

export default CadastrarTecnico;
