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
                <FooterRight color="#5ec2b7" />
                <FooterLeft color="#E55934" />
            </div>
        );
    }
}

export default Login;
