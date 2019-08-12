import React from 'react';
import { Component } from "react";
import '../../../App.css';
import './AbrirChamado.css';
import FormChamado from '../../components/FormChamado';
import FooterRight from '../../components/FooterRight';
import FooterLeft from '../../components/FooterLeft';


class AbrirChamado extends Component{
    render(){
        return(
            <div>
                <div className="container">
                <h1>Abrir Chamado</h1>
                </div>
                <FormChamado  />
                <div className="footer-abrir-chamado">
                  <FooterRight color="#0F3882" />
                  <FooterLeft color="#F22B2B" />
                </div>
            </div>

        );
    }
}

export default AbrirChamado;
