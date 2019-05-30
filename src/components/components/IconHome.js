import React from 'react';
import { Component } from "react";
import './IconHome.css';

class IconHome extends Component{
    render(){
        return (
            <div id="config" style={{backgroundImage: 'url('+this.props.src+')'}}>

            </div>
        );
    }
}

export default IconHome;
