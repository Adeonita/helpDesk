import React from 'react';
import { Component } from "react";
import './CardFeature.css';
import { Container } from 'react-bootstrap';

class Circle extends Component{
  render(){
    return(
      <div className="border-radius" style={{backgroundColor: this.props.color}}>
        <Container className="margin-top">
          <h2>{this.props.titleCard}</h2>
          {this.props.description}
        </Container>
      </div>
    );
  }
}

export default Circle;
