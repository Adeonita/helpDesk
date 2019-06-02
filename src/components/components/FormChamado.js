import React from 'react';
import { Component } from "react";
import './FormChamado.css';
import { Card, Row, Col, Container, Form, Button } from 'react-bootstrap';


class FormChamado extends Component {
    render(){
        return(
          <div className="wow fadeInDown">
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
                          <textarea></textarea>
                          <Button variant="outline-primary" type="submit">
                            Submit
                          </Button>
                        </Form>
                      </Card>
                    </Col>
                </Row>
                </Container>
          </div>

        );
    }
}

export default FormChamado;
