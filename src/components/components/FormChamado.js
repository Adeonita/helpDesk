import React from 'react';
import { Component } from "react";
import './FormChamado.css';
import { Card, Row, Col, Container, Form, Button } from 'react-bootstrap';
import CPFInput from './CPFInput.js';

class FormChamado extends Component {

    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    /*Valida submit do form*/
    handleSubmit(event) {
      event.preventDefault();
      if( !window.isValidCPF ) {
         alert('CPF informado é inválido!');
      }
    }

    render(){
        return(
          <div className="wow fadeInDown">
            <Container>
              <Card className="chamado">
                <Form method="post">
                  <Row className="justify-content-center"> {/*Esse id está em login.css*/}
                    <Col md={12}>
                      <Row className="justify-content-center">

                      </Row>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="formBasicText">
                        <Form.Control type="text" placeholder="Seu nome" name="nome" />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Seu e-mail" name="email"/>
                      </Form.Group>
                      <Form.Group controlId="ControlSelect1">
                        <Form.Control as="select" name="area" required>
                          <option value="" >Área de chamado</option>
                          <option name="ti">Ti</option>
                          <option name="nupe">NUPE</option>
                          <option name="academica">Acadêmica</option>
                          <option name="financeiro">Financeiro</option>
                          <option name="administrativo">Administrativo</option>
                          <option name="comunicacao">Comunicação</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="formBasicText">
                        <Form.Control type="text" placeholder="Seu número" name="numero"/>
                      </Form.Group>
                      <Form.Group controlId="formBasicText">
                        <CPFInput className="form-control" placeholder="Cpf" name="cpf" />
                      </Form.Group>
                      <Form.Group controlId="formBasicFile">
                        <Form.Control type="file" placeholder="Anexo" name="anexo"/>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col md={8}>
                      <Form.Group controlId="ControlSelect1">
                        <Form.Control as="select" name="area" required>
                          <option value="" >Descrição do Problema</option>
                          <option name="ti">Monitor quebrado</option>
                          <option name="nupe">Teclado quebrado</option>
                          <option name="academica">Impressora quebrada</option>
                          <option name="financeiro">Outros</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Form.Group controlId="ControlTextarea1">
                      <Form.Control as="textarea" rows="3" cols="80" placeholder="Escreva sua menssagem" name="menssagem"/>
                    </Form.Group>
                  </Row>
                  <Row className="justify-content-center">
                    <Button variant="outline-primary" type="submit">
                      Criar chamado
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
