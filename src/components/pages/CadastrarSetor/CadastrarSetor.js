import React from 'react';
import { Component } from 'react';
import '../../../App.css';
import FormCadastrarSetor from '../../components/FormCadastrarSetor';
import FooterLeft from '../../components/FooterLeft';
import FooterRight from '../../components/FooterRight';

class CadastrarSetor extends Component {
    render(){
        return(
            <div>
                <h1>Cadastrar Setores </h1>
                <FormCadastrarSetor />
                <div className="footer-cadastrar-area-problema">
                  <FooterRight color="#0F3882" />
                  <FooterLeft color="#F22B2B" />
                </div>
            </div>
        );
    }
}

export default CadastrarSetor;
