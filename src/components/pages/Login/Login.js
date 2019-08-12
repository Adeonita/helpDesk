import React from 'react';
import { Component } from 'react';
import '../../../App.css';
import './Login.css';
import FormLogin from '../../components/FormLogin';
import FooterRight from '../../components/FooterRight';
import FooterLeft from '../../components/FooterLeft';

class Login extends Component {
    render(){
        return(
            <div>
                <h1>Login</h1>
                <FormLogin />
                <div className="footer-login">
                  <FooterRight color="#0F3882" />
                  <FooterLeft color="#F22B2B" />
                </div>
            </div>
        );
    }
}

export default Login;
