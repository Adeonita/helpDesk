import React from 'react';
import { Component } from 'react';
import './FooterRight.css';
import '../../App.css';

class FooterRight extends Component {
  render(){
    return(
      <div className="footer-right wow fadeInLeft" style={{backgroundColor: this.props.color , marginTop: this.props.marginTop}}>
      </div>
    );
  }
}

export default FooterRight;
