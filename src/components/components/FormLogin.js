import React from 'react';
import { Component } from "react";
import './FormLogin.css';
import { Card, Row, Col, Container, Form, Button } from 'react-bootstrap';

class FormLogin extends Component {
    render(){
        return(
          <div className="wow fadeInDown">
            <Container>
                  <Row className="justify-content-center" id="margin-top-bottom">
                    <Col md={4}>
                      <Card className="login">
                        <Form>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="nome@dominio.com" />
                          </Form.Group>

                          <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Sua senha" />
                          </Form.Group>
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

export default FormLogin;
