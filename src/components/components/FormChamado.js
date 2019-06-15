import React from 'react';
import { Component } from "react";
import './FormChamado.css';
import { Card, Row, Col, Container, Form, Button } from 'react-bootstrap';


class FormChamado extends Component {
    render(){
        return(
          <div className="wow fadeInDown">
            <Container>
              <Card className="chamado">
                <Form>
                  <Row className="justify-content-center" id="margin-top-bottom">
                    <Col md={12}>
                      <Row className="justify-content-center">
                        <Form.Group controlId="ControlSelect1">
                          <Form.Control as="select">
                            <option require>Área de chamado</option>
                            <option value="ti">Ti</option>
                            <option value="nupe">NUPE</option>
                            <option value="academica">Acadêmica</option>
                            <option value="financeiro">Financeiro</option>
                            <option value="administrativo">Administrativo</option>
                            <option value="comunicacao">Comunicação</option>
                          </Form.Control>
                        </Form.Group>
                      </Row>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="formBasicText">
                        <Form.Control type="text" placeholder="Seu nome" />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Seu e-mail" />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="formBasicText">
                        <Form.Control type="text" placeholder="Seu número" />
                      </Form.Group>
                      <Form.Group controlId="formBasicText">
                        <Form.Control type="text" placeholder="Seu cpf" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Form.Group controlId="ControlTextarea1">
                      <Form.Control as="textarea" rows="3" cols="100" placeholder="Escreva sua menssagem"/>
                    </Form.Group>
                  </Row>
                  <Row className="justify-content-center">
                    <Button variant="outline-primary" type="submit">
                      Submit
                    </Button>
                  </Row>
                </Form>
            </Card>
          </Container>
        </div>

        );
    }
}

export default FormChamado;
