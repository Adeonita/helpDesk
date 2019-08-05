import React from 'react';
import { Component } from "react";
import './CardFeature.css';
import { Container } from 'react-bootstrap';

class Circle extends Component{
  render(){
    return(
      <div className="border-radius">
        <Container className="margin-top">
          <h2 className="title-card">{this.props.titleCard}</h2>
          <p>{this.props.description}</p>
        </Container>
      </div>
    );
  }
}

export default Circle;
