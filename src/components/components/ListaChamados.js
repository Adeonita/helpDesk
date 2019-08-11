import React, { Component } from 'react';
import './ListaChamados.css';
import '../../App.css';
import {Table, Button} from 'react-bootstrap';

class ListaChamados extends Component {
  render(){
    let removeBordaTopo = {
      borderTop: 'none'
    }
    let chamados = []
    for(let i=0; i<5; i++){
      chamados.push(
                      <tr>
                        <td>●</td>
                        <td> {i} </td>
                        <td>Área: {i}</td>
                        <td>Usuário: {i}</td>
                        <td>Descrição: {i}</td>
                        <td>Anexo: {i}</td>
                        <td><Button style={{backgroundColor: '#ff622a', border: 'none'}}>Vizualizar</Button></td>
                        <td><Button style={{backgroundColor: '#5ec2b7', border: 'none'}}>Aceitar</Button></td>
                        <td><Button style={{backgroundColor: '#fde74c', border: 'none'}}>Encaminhar</Button></td>
                      </tr>
                  )
    }
    return(
      <Table responsive className="lista-chamados wow zoomIn" >
        <thead>
          <tr>
            <th style={removeBordaTopo}>Prioridade</th>
            <th style={removeBordaTopo}>Número do Chamado</th>
            <th style={removeBordaTopo}>Área do Chamado</th>
            <th style={removeBordaTopo}>Usuário</th>
            <th style={removeBordaTopo}>Descrição</th>
            <th style={removeBordaTopo}>Anexo</th>
            <th style={removeBordaTopo}></th>
            <th style={removeBordaTopo}></th>
            <th style={removeBordaTopo}></th>
          </tr>
        </thead>
        <tbody>
            {chamados}
        </tbody>
      </Table>
    );
  }
}

export default ListaChamados;
