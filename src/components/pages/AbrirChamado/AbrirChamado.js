import React from 'react';
import { Component } from "react";
import '../../../App.css';
import './AbrirChamado.css';
import { Card, Row, Col, Container, Form, Button } from 'react-bootstrap';

class AbrirChamado extends Component{
    render(){
        return(
            <div>
                <div className="container">
                <h1>Abrir Chamado</h1>
                </div>
                <Container>
                  <Row className="justify-content-center" id="margin-top-bottom">
                    <Col md={4}>
                      <Card className="chamado">
                        <Form>

                        <Form.Group controlId="formBasicText">
                          <Form.Control type="text" placeholder="Seu nome" />
                        </Form.Group>

                        <Form.Group controlId="formBasicText">
                          <Form.Control type="text" placeholder="Seu número" />
                        </Form.Group>

                          <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Seu e-mail" />
                          </Form.Group>

                          <Button variant="outline-primary" type="submit">
                            Submit
                          </Button>
                        </Form>
                      </Card>
                    </Col>
                </Row>
                </Container>
                <div className="div-footer">
                </div>
            </div>

        );
    }
}

export default AbrirChamado;
