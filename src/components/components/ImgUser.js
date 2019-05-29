import React from 'react';
import { Component } from "react";
import './ImgUser.css';

class ImgUser extends Component{
    render(){
        return (
            <div id="user" style={{backgroundImage: 'url('+this.props.src+')'}}>
              
            </div>
        );
    }
}

export default ImgUser;
