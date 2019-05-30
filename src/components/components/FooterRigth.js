import React from 'react';
import { Component } from 'react';
import './FooterRigth.css';
import '../../App.css';

class FooterRigth extends Component {
  render(){
    return(
      <div className="footer-rigth" style={{backgroundColor: this.props.color}}>
      </div>
    );
  }
}

export default FooterRigth;
