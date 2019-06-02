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
import {Link} from 'react-router-dom';


class Home extends Component {
    render(){
        return (
            <div>
                <Container id="marginContainer">
                    <h1>Encontrou algum problema na Uneb?<br></br> Fale Conosco</h1>
                    <ImageHome />
                    <Row>
                      <Link to="/abrir-chamado">
                        <Col md={4} className="wow fadeInLeft">
                            <CardHome color="#F26419"
                                      cardTitle="Usuário"
                                      description="Cadastre chamados"
                            />
                        </Col>
                      </Link>
                      <Link to="/login">
                        <Col md={4} className="wow fadeInUp">
                            <CardHome color="#F26419"
                                      cardTitle="Técnico"
                                      description="Atenda Chamados"
                            />
                        </Col>
                      </Link>
                      <Link to="/login">
                        <Col md={4} className="wow fadeInRight">
                            <CardHome color="#F26419"
                                      cardTitle="Administrativo"
                                      description="Administre chamados"
                            />
                        </Col>
                      </Link>
                    </Row>
                </Container>
                <Container>
                    <h1>Funcionalidades especificas para cada usuário</h1>
                </Container>
                <Container fluid={true} className="paddingCardHome" >
                  <div className="section-user wow fadeInRight" data-wow-duration="3s">
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
                <Container fluid={true} className="paddingCardHome">
                  <div className="section-tecnico wow fadeInLeft " data-wow-duration="3s" >
                    <Row className="textCenter marginTop">
                      <Col md={8}>
                        <Row  className="justify-content-center">
                          <Col md={4}>
                            <CardFeature titleCard="Técnico" description="Através do seu próprio painel aceite, redirecione e finalize chamados abertos pelo usuários"/>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={4}>
                        <IconHome src={iconTecnico}/>
                      </Col>
                    </Row>
                  </div>
                </Container>
                <Container fluid={true} className="paddingCardHome">
                  <div className="section-adm wow fadeInRight " data-wow-duration="3s">
                  <Row className="marginTop margin-bottom">
                    <Col md={4}>
                      <IconHome src={iconAdm}/>
                    </Col>
                    <Col md={8}>
                      <Row  className="justify-content-center" >
                        <Col md={4}>
                          <CardFeature titleCard="Administrativo" description="Por meio de gráficos interativos monitore sua equipe de técnicos e o sistema como um todo"/>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  </div>
                </Container >
                <Container fluid={true} className="wow fadeInLeft" data-wow-duration="3s"> 
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
