import React from 'react';
import { Component } from "react";
import '../../../App.css';
import './AbrirChamado.css';
import FormChamado from '../../components/FormChamado';
import FooterRight from '../../components/FooterRight';


class AbrirChamado extends Component{
    render(){
        return(
            <div>
                <div className="container">
                <h1>Abrir Chamado</h1>
                </div>
                <FormChamado  />
                <FooterRight marginTop="-100px" color="#F26419"/>
            </div>

        );
    }
}

export default AbrirChamado;
