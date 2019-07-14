import React, {Component} from 'react';
import './Chamados.css';
import {Container, Row, Col, Jumbotron} from 'react-bootstrap';
import Background from '../../../images/engrenagens.jpg';  //Importo um background


let sectionStyle = {  //Crio uma sessão style
  width: "100%",  //Largura 100% da tela
  height: "592px",  //Altura
  padding: "50px",
  backgroundImage: "url(" + Background + ")"//Background image = url + Background que foi importado encima
};

let data = new Date();
let dia = data.getDate();
let dia_da_semana = new Array(
  'dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'
);
let mes = new Array(
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
);
let hoje = dia_da_semana[data.getDay()] + ", " + dia + " de " + mes[data.getMonth()]
let time = ` ${("0" + data.getHours()).slice(-2)} : ${("0" + data.getMinutes()).slice(-2)}`


class Chamado extends Component {
  render() {
    return (
      <div>
        <section style={ sectionStyle }>
        <p className="text-chamado">{time} ● {hoje}</p>
        </section>
      </div>

    );
  }
}
export default Chamado;
