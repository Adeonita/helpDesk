import React from 'react';
import { Component } from "react";
import '../../../App.css';
import './AbrirChamado.css';
import FormChamado from '../../components/FormChamado';
import FooterRigth from '../../components/FooterRigth';

class AbrirChamado extends Component{
    render(){
        return(
            <div>
                <div className="container">
                <h1>Abrir Chamado</h1>
                </div>
                <FormChamado />
                <FooterRigth color="#F26419" />
            </div>

        );
    }
}

export default AbrirChamado;
