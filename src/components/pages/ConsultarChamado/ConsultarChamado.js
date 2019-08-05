import React, { Component } from 'react';
import './ConsultarChamado.css';
import '../../../App.css';
import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';
import FooterRight from '../../components/FooterRight';
import FooterLeft from '../../components/FooterLeft';
import CPFInput from '../../components/CPFInput.js';

class ConsultarChamado extends Component {
  
  constructor(props) {
    super(props);     
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if( !window.isValidCPF ) {
       alert('CPF informado é inválido!');
    }
  }
  
  render(){
    return(
      <div>
        <Container>
          <h1>Consultar Chamado</h1>
              <Row className="justify-content-center " id="margin-top-bottom">
                  <Col md={5} className="text-center">
                    <h2 className="mb-4">Um chamado</h2>
                    <Card className="login card-consultar-chamado m-auto">
                      <Form>
                        <Form.Group controlId="formBasicText">
                          <Form.Control type="text" placeholder="Seu Nome" />
                        </Form.Group>
                        <Form.Group controlId="formBasicText">
                          <Form.Control type="text" placeholder="Número do chamado" />
                        </Form.Group>
                        <Form.Group controlId="formBasicText">
                          <Form.Control type="text" placeholder="Área do chamado" />
                        </Form.Group>
                        <Row className="justify-content-center">
                          <Button variant="outline-primary" type="submit">
                           Consultar
                          </Button>
                        </Row>
                      </Form>
                    </Card>
                  </Col>
                  <Col md={5} className="text-center">
                    <h2 className="mb-4">Listar meus chamados</h2>
                    <Card className="login card-listar-chamados m-auto">
                      <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicText">
                          <CPFInput className="form-control" placeholder="Cpf" name="cpf" />
                        </Form.Group>
                        <Row className="justify-content-center">
                          <Button variant="outline-primary" type="submit">
                             Listar
                          </Button>
                        </Row>
                      </Form>
                    </Card>
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
export default ConsultarChamado;
