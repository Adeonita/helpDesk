import React from 'react';
import { Component } from 'react';
import '../../../App.css';
import './Login.css';
import FormLogin from '../../components/FormLogin';
import FooterRigth from '../../components/FooterRigth';
import FooterLeft from '../../components/FooterLeft';

class Login extends Component {
    render(){
        return(
            <div>
                <h1>Login</h1>
                <FormLogin />
                <FooterRigth color="#5ec2b7"/>
                <FooterLeft color="#E55934" />
            </div>
        );
    }
}

export default Login;
