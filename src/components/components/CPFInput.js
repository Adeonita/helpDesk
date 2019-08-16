import React, {Component} from 'react';
import InputMask from 'react-input-mask';
import {Card, ListGroup} from 'react-bootstrap';

class CPFInput extends Component{

  constructor(props) {
    super(props);
    this.state = {
                    cpf: '',
                    isValidCPF: ''
                 };

    this.validarCPF = this.validarCPF.bind(this);
  }

  validarCPF(event) {
    let cpf = event.target.value;

    cpf = cpf.replace(/[^\w\s]/gi, '');

    if( cpf.length > 11 ) {
      cpf = cpf.substring(0, 11);
    }
    console.log(cpf);
    console.log(this.isValidCPF(cpf));
    this.setState({ isValidCPF: this.isValidCPF(cpf) });

    window.isValidCPF = this.isValidCPF(cpf);

    this.setState({
      cpf: cpf
    });

  }

  isValidCPF(strCPF) {
        var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
  }

  render(){
    return(
      <div>
        <InputMask {...this.props} className="form-control" mask="999.999.999-99" value={this.state.cpf} onChange={this.validarCPF} />
      </div>
    );
  }

}

export default CPFInput;
