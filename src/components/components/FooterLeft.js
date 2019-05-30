import React from 'react';
import { Component } from 'react';
import './FooterLeft.css';
import '../../App.css';

class FooterLeft extends Component {
  render(){
    return(
      <div className="footer-left" style={{backgroundColor: this.props.color}}>
      </div>
    );
  }
}

export default FooterLeft;
