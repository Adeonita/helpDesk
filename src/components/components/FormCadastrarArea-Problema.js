import React from 'react';
import { Component } from "react";
import './FormCadastrarArea-Problema.css';
import { Card, Row, Col, Container, Form, Button } from 'react-bootstrap';


class FormCadastrarAreaProblema extends Component {

    render(){
        return(
          <div className="wow fadeInDown">
           <Container>
               <Row className="justify-content-center " id="margin-top-bottom">
                   <Col md={5} className="text-center">
                     <h2 className="mb-4">Setor</h2>
                     <a href="#">+ Cadastrar um novo setor</a>
                     <Card className="login card-consultar-chamado m-auto">
                       <Form>
                         <Form.Group controlId="formBasicText">
                           <Form.Control type="text" placeholder="Qual a o setor?" />
                         </Form.Group>
                         <Row className="justify-content-center">
                           <Button variant="outline-primary" type="submit" >
                            Cadastrar Setor
                           </Button>
                         </Row>
                       </Form>
                     </Card>
                   </Col>
                   <Col md={5} className="text-center">
                     <h2 className="mb-4">Problema</h2>
                     <Card className="login card-consultar-chamado m-auto">
                       <Form>
                         <Form.Group controlId="formBasicText">
                           <Form.Control type="text" placeholder="Qual o problema?" />
                         </Form.Group>

                         <Row className="justify-content-center">
                           <Button variant="outline-primary" type="submit">
                            Cadastrar Problema
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

export default FormCadastrarAreaProblema;
