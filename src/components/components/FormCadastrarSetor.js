import React, { Component } from 'react';
import './FormCadastrarSetor.css';
import { Card, Row, Col, Container, Form, Button } from 'react-bootstrap';

const styleButton = {
  'backgroundColor': 'white',
  'borderColor': 'white',
  'color': '#808080',
  'margin-left': '-28px',
  'focus': ''

}

const styleRow = {
  'marginLeft': '140px'
}

class FormCadastrarSetor extends Component {

    constructor(props){
      super(props);
      this.state = {
                  input: false,
                  classHide: 'd-none',
                  items: [], //Array para mostrar itens inseridos
                  text: ''
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
              <Row className="justify-content-center" id="margin-top-bottom">
                <Col md={4} className="text-center">
                    <Button onClick={this.addInput} style = {styleButton}>
                      + Cadastrar um novo setor
                    </Button>
                </Col>
              </Row>
              <Row className="justify-content-center" style = {styleRow}>
                <Col md={3}>
                  <Form className = {this.state.classHide}>
                    <Form.Group controlId="formBasicText" size = "sm">
                      <Form.Control type="text" placeholder="Setor" />
                    </Form.Group>
                  </Form>
                </Col>
                <Col md={3}>
                  <Button className ={this.state.classHide + " "} style = {styleButton} variant="outline-primary" type="submit">
                   Cadastrar
                  </Button>
                </Col>
              </Row>
          </Container>
       </div>

        );
    }
}

export default FormCadastrarSetor;
