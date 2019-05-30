import React from 'react';
import { Component } from "react";
import CardHome from '../../components/Card';
import ImageHome from '../../components/ImageHome';
import { Container, Row, Col} from 'react-bootstrap';
import './Home.css';
import '../../../App.css';
import IconHome from '../../components/IconHome';
import iconUser from '../../../images/iconUser.png';
import iconTecnico from '../../../images/iconTecnico.png';
import iconAdm from '../../../images/iconAdm.png';
import CardFeature from '../../components/CardFeature';


class Home extends Component {
    render(){
        return (
            <div>
                <Container id="marginContainer">
                    <h1>Encontrou algum problema na Uneb?<br></br> Fale Conosco</h1>
                    <ImageHome />
                    <Row>
                        <Col md={4}>
                            <CardHome color="#F26419"
                                      cardTitle="Usuário"
                                      description="Cadastre chamados"
                            />
                        </Col>
                        <Col md={4}>
                            <CardHome color="#F26419"
                                      cardTitle="Técnico"
                                      description="Atenda Chamados"
                            />
                        </Col>
                        <Col md={4}>
                            <CardHome color="#F26419"
                                      cardTitle="Administrativo"
                                      description="Administre chamados"
                            />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <h1>Funcionalidades especificas para cada usuário</h1>
                </Container>
                <Container fluid={true}>
                <div className="section-user">
                  <Row className="textCenter marginTop">
                    <Col md={4}>
                      <IconHome src={iconUser}/>
                    </Col>
                    <Col md={8}>
                        <Row  className="justify-content-center">
                          <Col md={4}>
                            <CardFeature  titleCard="Usuário" description="Deixe a complicação de lado, realize registros de ocorrências sem fazer cadastro. Basta preencher o formulário e pronto!"/>
                            </Col>
                        </Row>
                    </Col>
                  </Row>
                </div>
                </Container>
                <Container fluid={true}>
                  <div className="section-tecnico">
                    <Row className="textCenter marginTop">
                      <Col md={8}>
                        <Row  className="justify-content-center">
                          <Col md={4}>
                            <CardFeature color="#5ec2b7" titleCard="Técnico" description="Através do seu próprio painel aceite, redirecione e finalize chamados abertos pelo usuários"/>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={4}>
                        <IconHome src={iconTecnico}/>
                      </Col>
                    </Row>
                  </div>
                </Container>
                <Container fluid={true}>
                  <div className="section-adm">
                  <Row className="marginTop margin-bottom">
                    <Col md={4}>
                      <IconHome src={iconAdm}/>
                    </Col>
                    <Col md={8}>
                      <Row  className="justify-content-center">
                        <Col md={4}>
                          <CardFeature color="#E55934" titleCard="Administrativo" description="Por meio de gráficos interativos monitore sua equipe de técnicos e o sistema como um todo"/>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  </div>
                </Container>
                <Container fluid={true}>
                  <div className="section-footerA">
                  </div>
                  <div className="section-footerB">
                  </div>

                </Container>
              </div>
        );
    }
}

export default Home;
