import React from 'react';
import { Component } from "react";
import './FormCadastrarTecnico.css';
import { Card, Row, Col, Container, Form, Button } from 'react-bootstrap';


class FormCadastrarTecnico extends Component {
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
                        <Form.Control type="text" placeholder="Nome" name="nome" />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="E-mail" name="email"/>
                      </Form.Group>
                      <Form.Group controlId="formBasicText">
                        <Form.Control type="text" placeholder="Cargo" name="cargo"/>
                      </Form.Group>
                      <Form.Group controlId="formBasicText">
                        <Form.Control type="text" placeholder="Login" name="login"/>
                      </Form.Group>
                      <Form.Group controlId="ControlSelect1">
                        <Form.Control as="select" name="area" required>
                          <option value="" >Setor</option>
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
                        <Form.Control type="text" placeholder="Número" name="numero"/>
                      </Form.Group>
                      <Form.Group controlId="formBasicText">
                        <Form.Control type="text" placeholder="Cpf" name="cpf"/>
                      </Form.Group>
                      <Form.Group controlId="formBasicText">
                        <Form.Control type="password" placeholder="Senha" name="senha"/>
                      </Form.Group>
                      <Form.Group controlId="formBasicText">
                        <Form.Control type="text" placeholder="Matricula" name="matricula"/>
                      </Form.Group>
                      <Form.Group controlId="ControlSelect1">
                        <Form.Control as="select" name="area" required>
                          <option value="" >Tipo</option>
                          <option name="tecnico">Técnico</option>
                          <option name="administrador">Administrador</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Button variant="outline-primary" type="submit">
                      Casdastrar
                    </Button>
                  </Row>
                </Form>
            </Card>
          </Container>
        </div>
        );
    }
}

export default FormCadastrarTecnico;
