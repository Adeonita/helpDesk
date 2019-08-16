import React, { Component } from 'react';
import './ListaChamados.css';
import '../../App.css';
import {Table, Button, Modal} from 'react-bootstrap';
import Chamado from './Chamado';

class ListaChamados extends Component {

  constructor(props){
    super(props);
      this.state = {
                  showModal: false,
                  isHideModal: true  //Checa se o modal esta escondido
      }
      this.exibeModal = this.exibeModal.bind(this);
      this.onHideModal = this.onHideModal.bind(this);

  }

  exibeModal(){
    this.setState({
      showModal: true
    });
  }

  onHideModal(){  //Quando modal estiver escondido seto para falso
    this.setState({
      showModal: false
    });
  }

  render(){
    let removeBordaTopo = {  //Remove a borda do título da tabela
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
                        <td><Button onClick={this.exibeModal} style={{backgroundColor: '#FF8C42', border: 'none'}}>Vizualizar</Button></td>
                        <td><Button style={{backgroundColor: '#0f3882', border: 'none'}}>Aceitar</Button></td>
                        <td><Button style={{backgroundColor: '#F22B2B', border: 'none'}}>Encaminhar</Button></td>
                      </tr>
                  );

    }
    return(
      <div>
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

        <Modal show={this.state.showModal} onHide={this.onHideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Chamado</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Chamado/>
          </Modal.Body>
          <Modal.Footer>
            <Button style={{backgroundColor: '#0f3882', border: 'none'}} onClick={this.onHideModal}>
              Aceitar
            </Button>
            <Button style={{backgroundColor: '#F22B2B', border: 'none'}} onClick={this.onHideModal}>
              Encaminhar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>




    );
  }
}

export default ListaChamados;
