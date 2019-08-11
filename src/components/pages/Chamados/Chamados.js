import React, {Component} from 'react';
import './Chamados.css';
import {Container, Row, Col} from 'react-bootstrap';
import Background from '../../../images/teste.png';  //Importo um background
import ListaChamados from '../../components/ListaChamados';

class Chamados extends Component {
  render() {
    return (
      <div>
        <Container fluid={true}>
        <Row>
          <Col>
            <ListaChamados />
          </Col>
        </Row>
        </Container>
      </div>

    );
  }
}
export default Chamados;
