import React from 'react';
import { Component } from 'react';
import '../../../App.css';
import FormCadastrarAreaProblema from '../../components/FormCadastrarArea-Problema';
import FooterLeft from '../../components/FooterLeft';
import FooterRight from '../../components/FooterRight';

class CadastrarAreaProblema extends Component {
    render(){
        return(
            <div>
                <h1>Cadastrar Setores e Problemas</h1>
                <FormCadastrarAreaProblema />
                <div className="footer-cadastrar-area-problema">
                  <FooterRight color="#0F3882" />
                  <FooterLeft color="#F22B2B" />
                </div>
            </div>
        );
    }
}

export default CadastrarAreaProblema;
