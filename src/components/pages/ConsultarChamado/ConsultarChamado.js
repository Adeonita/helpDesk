import React, { Component } from 'react';
import './ConsultarChamado.css';
import '../../../App.css';
import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap';

class ConsultarChamado extends Component {
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
                            Submit
                          </Button>
                        </Row>
                      </Form>
                    </Card>
                  </Col>
                  <Col md={5} className="text-center">
                    <h2 className="mb-4">Listar meus chamados</h2>
                    <Card className="login card-listar-chamados m-auto">
                      <Form>
                        <Form.Group controlId="formBasicText">
                          <Form.Control type="Text" placeholder="Seu cpf" />
                        </Form.Group>
                        <Row className="justify-content-center">
                          <Button variant="outline-primary" type="submit">
                            Submit
                          </Button>
                        </Row>
                      </Form>
                    </Card>
                  </Col>
              </Row>

        </Container>
      </div>
    );
  }
}
export default ConsultarChamado;
