import React from 'react';
import { Component } from "react";
import './FormCadastrarSetor.css';
import { Card, Row, Col, Container, Form, Button } from 'react-bootstrap';


class FormCadastrarAreaProblema extends Component {

    constructor(props){
      super(props);
      this.state = {
                  input: false,
                  classHide: 'd-none'
                };
      this.addInput = this.addInput.bind(this);
      this.changeClassHide = this.changeClassHide.bind(this);

    }



    addInput(){
      this.setState({
        input: !this.state.input
      });
      this.changeClassHide();
    }

    changeClassHide(){  //Exibe ou esconde o input
      if( this.state.input ){
        this.setState({
          classHide: 'd-block'
        });
      }else {
        this.setState({
          classHide: 'd-none'
        });
      }
    }



    render(){
        return(
          <div className="wow fadeInDown">
          <Container>
              <Row className="justify-content-center " id="margin-top-bottom">
                <Col md={5} className="text-center">
                    <Button onClick={this.addInput} >+ Cadastrar um novo setor</Button>
                      <Form className = {this.state.classHide}>
                        <Form.Group controlId="formBasicText">
                          <Form.Control type="text" placeholder="Setor" />
                        </Form.Group>
                      </Form>
                    </Col>
              </Row>
          </Container>
       </div>

        );
    }
}

export default FormCadastrarAreaProblema;
